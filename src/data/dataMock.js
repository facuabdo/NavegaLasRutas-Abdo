export const categorias = [
  {
    id: 1,
    nombre: "Guitarras",
  },
  {
    id: 2,
    nombre: "Amplificadores",
  },
  {
    id: 3,
    nombre: "Efectos",
  },
  {
    id: 4,
    nombre: "Teclados",
  },
];

export const productos = [
  // Producto existente
  {
    id: 1,
    categoria: 1,
    nombre: "Fender Stratocaster",
    precio: "1600",
    descripcion:
      "Guitarra Fender Stratocaster American Std USA 1991. Mango y diapasón de maple.",
    stock: 1,
    foto: "fender.jpg",
  },
  // Nuevos productos
  {
    id: 2,
    categoria: 2, // Amplificadores
    nombre: "Marshall JCM800",
    precio: "1200",
    descripcion: "Amplificador Marshall JCM800 100W. Sonido clásico de rock.",
    stock: 3,
    foto: "marshall-jcm800.webp",
  },
  {
    id: 3,
    categoria: 3, // Efectos
    nombre: "Boss DD-7",
    precio: "150",
    descripcion:
      "Pedal de delay digital/analogico Boss DD-7. Versatilidad y calidad.",
    stock: 5,
    foto: "boss-dd7.jpg",
  },
  {
    id: 4,
    categoria: 4, // Teclados
    nombre: "Yamaha P-45",
    precio: "500",
    descripcion:
      "Piano digital Yamaha P-45. 88 teclas ponderadas, sonido y sensación realista.",
    stock: 2,
    foto: "yamaha-p45.webp",
  },
  {
    id: 5,
    categoria: 1, // Guitarras
    nombre: "Gibson Les Paul",
    precio: "2500",
    descripcion:
      "Guitarra Gibson Les Paul Standard. Tono y sustain legendarios.",
    stock: 1,
    foto: "gibson.jpg",
  },
];

export const getCategorias = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categorias);
    }, 2000);
  });
};

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter((producto) => producto.categoria === idCategoria)
      );
    }, 2000);
  });
};
