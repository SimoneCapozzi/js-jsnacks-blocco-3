//crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o piu di 15 cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

$(document).ready(function(){

  //creo un arrei di oggetti formato da 10 zucchine
  
  var arrZucchine = [
    {
      'nome': 'zucchina-1',
      'peso': '50gr',
      'lunghezza': '15',
    },
    {
      'nome': 'zucchina-2',
      'peso': '60gr',
      'lunghezza': '18',
    },
    {
      'nome': 'zucchina-3',
      'peso': '80gr',
      'lunghezza': '20',
    },
    {
      'nome': 'zucchina-4',
      'peso': '70gr',
      'lunghezza': '17',
    },
    {
      'nome': 'zucchina-5',
      'peso': '100gr',
      'lunghezza': '14',
    },
    {
      'nome': 'zucchina-6',
      'peso': '120gr',
      'lunghezza': '19',
    },
    {
      'nome': 'zucchina-7',
      'peso': '40gr',
      'lunghezza': '10',
    },
    {
      'nome': 'zucchina-8',
      'peso': '120gr',
      'lunghezza': '18',
    },
    {
      'nome': 'zucchina-9',
      'peso': '100gr',
      'lunghezza': '16',
    },
    {
      'nome': 'zucchina-10',
      'peso': '90gr',
      'lunghezza': '15',
    },
  ];
  
  arrZucchine_lunghe = [];

  arrZucchine_corte =[];

  var Zucchine_lunghe = 0;

  var Zucchine_corte = 0;

  pesoTot1 = 0;

  pesoTot2 = 0;

  for( var i in arrZucchine){

     var zucchina = arrZucchine[i];
    //console.log(zucchina);
     if (parseInt(zucchina["lunghezza"]) > 15){

      arrZucchine_lunghe.push(zucchina);

      pesoTot1 += parseInt(zucchina['peso']);

     }else{

      arrZucchine_corte.push(zucchina);
      
      pesoTot2 += parseInt(zucchina['peso']);
     }





  }

  console.log(arrZucchine_lunghe);

  console.log(pesoTot1);

  console.log(arrZucchine_corte);

  console.log(pesoTot2);



});