const cliente = [{
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  },

  {
    nome: "Bruno",
    idade: 22,
    email: "bruno@firma.com",
    telefone: ["1155555550", "1144444440"],
  }]

  for (let index = 0; index < cliente.length; index++) {
    console.log(cliente[index].email)
  }
