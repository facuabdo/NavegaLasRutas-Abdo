/* eslint-disable react/prop-types */

import { getPorCategoria, getProductos } from "../../data/dataMock";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const { idCategoria } = useParams();

  useEffect(() => {
    console.log(idCategoria);

    const productosPromise = idCategoria
      ? getPorCategoria(idCategoria)
      : getProductos();

    productosPromise.then((productosList) => setProductos(productosList));
  }, [idCategoria]);

  return (
    <div className="item-list-container">
      <hr />

      {productos
        ? productos.length > 0
          ? productos.map((producto) => (
              <h1 key={producto.id}>{producto.nombre}</h1>
            ))
          : "No hay productos para mostrar"
        : "Cargando productos..."}
    </div>
  );
};
