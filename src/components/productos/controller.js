const productos = [
  {
    id: 1,
    producto: "Sublime",
    categoria:"Golosina",
    precio: 1.50
  },
  {
    id: 2,
    producto: "Cuates Picante",
    categoria:"Golosina",
    precio: 1
  },
  {
    id: 3,
    producto: "Cifrut",
    categoria:"Bebida",
    precio: 1.20
  },
];

export const lista_productos = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: productos,
  });
};
