// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery
// Nome repo: js-jq-grigliaquadrati



// Suggerimento: usare una classe per individuare quali quadratini diventano rossi

// quindi la logica è che tutto si basa intorno ad una scelta random di 15 quadrati

// iniziamo assegnando numeri a caso.


// creo un array vuote di supporto, per far si che i numeri non si ripetano
var ranArray = [];
// voglio che i miei numeri siano massimo 15
while(ranArray.length < 15) {
    // richiamo la generazione di numeri random
    var num = myRandom(0, 63);
    // non voglio che siano doppioni
    if (!ranArray.includes(num)) {
        // ne pusha uno nell'array
        ranArray.push(num);
        // e con lo stesso numero ne prende uno in poszione casuale tra quelli dentro l'html
        // e gli assegna la classe red
        $('.squareyard').find('.square').eq(num).addClass('red');
    }
};
console.log(ranArray);

// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi




// funzioni utili
function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function myNumbSorting(array){
  array.sort(function(a, b){return a-b});
  return array;
};
