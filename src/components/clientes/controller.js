const clientes = [
  {
    id: 1,
    nombre: "Ariel Zarate",
    dni: 962747422,
    direccion:"Psj. Libertad 189",
    distrito:"El Agustino"
  },
  {
    id: 2,
    nombre: "Carlos Chile",
    dni: 975361203,
    direccion:"Av. Los Eucaliptos 112",
    distrito:"Santa Anita"
  },
  {
    id: 3,
    nombre: "Diana Chipana",
    dni: 962747422,
    direccion:"Av. Mariscal Castill 137",
    distrito:"Santiago De Surco"
  },
];

export const lista_clientes = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: clientes,
  });
};
