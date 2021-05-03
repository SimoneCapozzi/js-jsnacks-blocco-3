//Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.

//creo un array di oggetti

const animali = [
  {
    nome: "leone",
    famiglia: "felidi",
    classe: "mammiferi"
  },
  {
    nome: "cane",
    famiglia: "canidi",
    classe: "mammiferi"
  },
  {
    nome: "ragno",
    famiglia: "tarantola",
    classe: "aracnidi"
  },
  {
    nome: "gallina",
    famiglia: "fasianidi",
    classe: "uccelli"
  },
  

]

const mammiferi = animali.filter((element)=>{
  return element.classe === "mammiferi";
});
console.log(mammiferi);