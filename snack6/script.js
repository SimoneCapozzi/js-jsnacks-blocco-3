//creo un array di stringhe

const parole = ["topolino", "PAPERINO", "pluto", "Pippo"];
//console.log(parole);

//creo un ciclo map per generare un nuovo array con le modifiche

const Nuoveparole = parole.map((parola)=>{
  return parola.toLowerCase();
  
})

console.log(Nuoveparole);

const NuoveparoleM = Nuoveparole.map((parola)=>{
  return parola.charAt(0).toUpperCase() + parola.slice(1);
  
})
console.log(NuoveparoleM);

//esercizio numero 1
