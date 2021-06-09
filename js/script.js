/* Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50 */

/* scelta difficoltà */
var min = 1
var max;


document.getElementById("zero").addEventListener("click", max100);
document.getElementById("uno").addEventListener("click", max80);
document.getElementById("due").addEventListener("click", max50);



function max100() {
    max = 100;
    hide();
    game();
}

function max80() {
    max = 80;
    hide();
    game();
}

function max50() {
    max = 50;
    hide();
    game();
}

/* nasconde scelta difficoltà, mostra inserimento numero */
function hide(){
    document.getElementById("diff").className = "hidden";
    document.getElementById("cont").className = "d-flex justify-content-between align-items-center";
    for (var i = min; i <= max; i++) {
        document.getElementById("campo").innerHTML += "<div id=n" + i + " \" class=\"square\"></div>";
    }
}

function game(){

    var numeri = createArray();
    var numeriUtente = [];

    var frase = "Inserisci un numero da 1 a " + max;
    document.getElementById("text-num").innerHTML = frase;

    var pulsante = document.getElementById("addN");
    pulsante.addEventListener("click", askNumbersWP);
    
    function askNumbersWP() {
        
        var num = parseInt(document.getElementById("numb").value);
        if (numeriUtente.length < max - 16 && !numeri.includes(num)) {
            document.getElementById("text-num").innerHTML = frase;
            if (!(num < min || num > max || Number.isNaN(num) || numeriUtente.includes(num))) {
                numeriUtente.push(num);
                document.getElementById("n" + num).className += " green";
                document.getElementById("numb").value = "";
            } else {
                document.getElementById("text-num").innerHTML = "Numero non valido o inserito in precedenza:inserisci un numero da 1 a " + max;
                document.getElementById("numb").value = "";
            }
        } else {
            numeriUtente.push(num);
            document.getElementById("mains").className = "hidden";
            document.getElementById("text").innerHTML = "Il tuo punteggio è: " + numeriUtente.length + "<br>I numeri minati sono: " + numeri + "<br>Hai colpito il numero: " + num + "<br>I numeri da te inseriti sono: " + numeriUtente;
        }

    }

    /* popolazione array con numeri casuali non ripetuti da min a max */
    function createArray(){
        var array = [];
        while (array.length < 16) {
            var nRand = Math.floor(Math.random()*(max - min + 1) + 1);
            if (!array.includes(nRand)) array.push(nRand);
        }
        return array;
    }

    /* richiesta numeri a utente con prompt*/
    function askNumbers(){
        var array = [];
        while(array.length < max - 16 && !numeri.includes(numUtente)) {
            var frase = "Inserisci un numero da 1 a " + max;
            while (numUtente < min || numUtente > max || Number.isNaN(numUtente) || array.includes(numUtente)){
                numUtente = parseInt(prompt(frase));
                frase = "Numero non valido: inserisci un numero da 1 a " + max;
            }
            array.push(numUtente);
        }
        return array;
    }    
    
}
