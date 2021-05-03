/* Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

const persone = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 60
  },
  {
    nome: "Luigi",
    cognome: "Verdi",
    eta: 12
  },
  {
    nome: "Silvia",
    cognome: "Neri",
    eta: 25
  },
  {
    nome: "Mark",
    cognome: "Caltagirone",
    eta: 45
  },
  {
    nome: "Francesco",
    cognome: "viola",
    eta: 5
  },
]

let condizioni = persone.map((element)=>{
  let puoGuidare = (element.eta >= 18) ? "è maggiorenne, quindi può guidare" : "non è maggiorenne, quindi bnon puo guidare"
  let frase = `${element.nome} ${element.cognome} ${puoGuidare} perche ha ${element.eta} anni`
  return frase;
});

console.log(condizioni)
