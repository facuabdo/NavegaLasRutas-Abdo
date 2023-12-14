/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import { getProductos } from "../../data/dataMock";

export const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    getProductos().then((productosList) => setProductos(productosList));
  }, []);

  return (
    <div className="item-list-container">
      {title}
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
