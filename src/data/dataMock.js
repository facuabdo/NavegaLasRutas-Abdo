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

export const getCategorias = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categorias);
    }, 2000);
  });
};
