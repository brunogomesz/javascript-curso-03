const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }


const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro2 = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

const personagens = { ...mago, ...guerreiro2, ...ranger }
console.log(personagens)

// Objetos com a mesma propriedade, só exibe o último array