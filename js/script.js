/* Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50 */

/* scelta difficoltà */
var max = 100;
var min = 1
do var diff = parseInt(prompt("Scegli il livello di difficoltà: 0, 1 o 2"));
while (diff != 0 && diff != 1 && diff != 2);
if (diff == 1) max = 80; 
else if (diff == 2) max = 50;

/* dichiarazione variabili */
var numeri = createArray();
var round = 0;
var numUtente = 0;
var numeriUtente = askNumbers();

/* popolazione array con numeri casuali non ripetuti da min a max */
function createArray(){
    var array = [];
    while (array.length < 16) {
        var nRand = Math.floor(Math.random()*(max - min + 1) + 1);
        if (!array.includes(nRand)) array.push(nRand);
    }
    return array;
}

/* richiesta numeri a utente */
function askNumbers(){
    var array = [];
    while(round < max - 16 && !numeri.includes(numUtente)) {
        var frase = "Inserisci un numero da 1 a " + max;
        while (numUtente < min || numUtente > max || Number.isNaN(numUtente) || array.includes(numUtente)){
            numUtente = parseInt(prompt(frase));
            frase = "Numero non valido: inserisci un numero da 1 a " + max;
        }
        array.push(numUtente);
        round++;
    }
    return array;
}

document.getElementById("text").innerHTML = "Il tuo punteggio è: " + round + "<br>I numeri minati sono: " + numeri + "<br>Hai colpito il numero: " + numUtente + "<br>I numeri da te inseriti sono: " + numeriUtente;
