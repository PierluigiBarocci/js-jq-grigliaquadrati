// BONUS: generare la griglia dei quadratini utilizzando jQuery

// ciclo while che crea 8 row
while (($('.row').length) < 8) {
    $('.squareyard').append('<div class="row"></div>');
};
// ciclo for per creare, all'interno di ogni row, 8 square,
for (var i = 0; i < 8; i++) {
    $('.row').append('<div class="square"></div>');
};

// il log finale dovrebbe portare 8 row e 64 square
console.log($('.row').length);
console.log($('.square').length);


// creo un array vuota di supporto, per far si che i numeri non si ripetano
var ranArray = [];
// voglio che i miei numeri siano massimo 15
while(ranArray.length < 15) {
    // richiamo la generazione di numeri random
    var num = myRandom(0, 63);
    // non voglio che siano doppioni
    if (!ranArray.includes(num)) {
        // ne pusha uno nell'array
        ranArray.push(num);
        // e con lo stesso numero ne prende uno in poszione 'num-random' tra quelli dentro l'html
        // e gli assegna la classe danger
        $('.squareyard').find('.square').eq(num).addClass('danger');
    }
};
// faccio un log momentano per assicurarmi che l'Array abbia 15 numeri diversi tra loro,
// per comodità li metto in ordine crescente, si legge meglio
console.log(myNumbSorting(ranArray));

// con la stessa logica, continuo a riempire l'Array con i restanti numeri;
// solo che questa volta assegna classe sure;
// alla fine del ciclo dovrei ottenere un array con tutti i numeri da 0 a 63, che
// corrispondono alle posizioni dei quadratini
while(ranArray.length < 64) {
    var num = myRandom(0, 63);
    if (!ranArray.includes(num)) {
        ranArray.push(num);
        $('.squareyard').find('.square').eq(num).addClass('sure');
    }
}
// log per assicurarmi che il mio ragionamento fila
console.log(myNumbSorting(ranArray));

// perfetto, ora ho 15 quadrati casuali con classe danger, e i restanti con classe sure
// ora basterà mettere due click function che assegnino rispettivamente le classi
// red e green, già stilate in CSS, e il gioco è fatto

$('.square.danger').click(function(){
    $(this).addClass('red');
});
$('.square.sure').click(function(){
    $(this).addClass('green');
});

// funzioni utili

// funzione per generare numero random (estremi compresi)
function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// funzione per riordinare la mia array in ordine crescente
function myNumbSorting(array){
  array.sort(function(a, b){return a-b});
  return array;
};
