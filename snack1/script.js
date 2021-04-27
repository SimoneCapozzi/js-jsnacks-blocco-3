//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ogniuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
$(document).ready(function(){

  //creo un arrei di oggetti formato da 10 zucchine
  
  var arrZucchine = [
    {
      'nome': 'zucchina-1',
      'peso': '50gr',
      'lunghezza': '15cm',
    },
    {
      'nome': 'zucchina-2',
      'peso': '60gr',
      'lunghezza': '18cm',
    },
    {
      'nome': 'zucchina-3',
      'peso': '80gr',
      'lunghezza': '20cm',
    },
    {
      'nome': 'zucchina-4',
      'peso': '70gr',
      'lunghezza': '17cm',
    },
    {
      'nome': 'zucchina-5',
      'peso': '100gr',
      'lunghezza': '14cm',
    },
    {
      'nome': 'zucchina-6',
      'peso': '120gr',
      'lunghezza': '19cm',
    },
    {
      'nome': 'zucchina-7',
      'peso': '40gr',
      'lunghezza': '10cm',
    },
    {
      'nome': 'zucchina-8',
      'peso': '120gr',
      'lunghezza': '18cm',
    },
    {
      'nome': 'zucchina-9',
      'peso': '100gr',
      'lunghezza': '16cm',
    },
    {
      'nome': 'zucchina-10',
      'peso': '90gr',
      'lunghezza': '15cm',
    },
  ];
  //console.log(arrZucchine)
  
  //creo una variabile 'pesoTot'dove salverò il risultato del peso delle zucchine che inizialmente sarà uguale a zero
  var pesoTot = 0; //dico alla variabile di essere un numero se era una stringa era 'var pesoTot;)
  
  //creo un ciclo for in per calcolare il valore nella chiave peso
  
  for(var i in arrZucchine){
    var zucchina = arrZucchine[i];
    pesoTot += parseInt(zucchina['peso']);
    console.log(pesoTot);
  }

});

