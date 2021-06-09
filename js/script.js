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
    game();
}

function max50() {
    max = 50;
    game();
}

function hide(){
    document.getElementById("diff").className = "hidden";
    document.getElementById("mains").className = "";
}

function game(){

    var numeri = createArray();
    var numUtente = 0;
    var numeriUtente = [];

    console.log(numeri);
    var frase = "Inserisci un numero da 1 a " + max;
    document.getElementById("text").innerHTML = frase;

    var keepGoing = true;

    var pulsante = document.getElementById("addN");
    pulsante.addEventListener("click", askNumbersWP);
    
    
        /* document.getElementById("addN").removeEventListener("click", askNumbersWP);
        document.getElementById("mains").className = "hidden";
             document.getElementById("text").innerHTML = "Il tuo punteggio è: " + numeriUtente.length + "<br>I numeri minati sono: " + numeri + "<br>Hai colpito il numero: " + numUtente + "<br>I numeri da te inseriti sono: " + numeriUtente; */
    
    
    function askNumbersWP() {
        var num = parseInt(document.getElementById("numb").value);
        if (numeriUtente.length < max - 16 && !numeri.includes(num)) {
            document.getElementById("text").innerHTML = frase;
            
            if (!(num < min || num > max || Number.isNaN(num) || numeriUtente.includes(num))) {
                numeriUtente.push(num);
            } else document.getElementById("text").innerHTML = "Numero non valido o inserito in precedenza:inserisci un numero da 1 a " + max;
            console.log(numeriUtente);
        } else {
            keepGoing = false;
            /* document.getElementById("addN").removeEventListener("click", askNumbersWP); */
            document.getElementById("mains").className = "hidden";
             document.getElementById("text").innerHTML = "Il tuo punteggio è: " + numeriUtente.length + "<br>I numeri minati sono: " + numeri + "<br>Hai colpito il numero: " + numUtente + "<br>I numeri da te inseriti sono: " + numeriUtente;
        }
    }

        /* if (keepGoing) {
            if (numeriUtente.length < max - 16 && !numeri.includes(numUtente)) {
                document.getElementById("text").innerHTML = frase;
                var num = parseInt(document.getElementById("numb").value);
                if (!(num < min || num > max || Number.isNaN(num) || numeriUtente.includes(num))) {
                    numeriUtente.push(num);
                } else document.getElementById("text").innerHTML = "Numero non valido o inserito in precedenza: inserisci un numero da 1 a " + max;
                console.log(numeriUtente);
            } else {
                keepGoing = false;
                console.log(keepGoing);
            }
        } else { */
        


    


    /* document.getElementById("text").innerHTML = "Il tuo punteggio è: " + numeriUtente.length + "<br>I numeri minati sono: " + numeri + "<br>Hai colpito il numero: " + numUtente + "<br>I numeri da te inseriti sono: " + numeriUtente; */

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
    

    /* CASINOOOOO richiesta numeri a utente senza prompt*/
    /* function askN(arrayPC) {
        var array = [];
        while(array.length < max - 16 && !arrayPC.includes(numUtente)) {
            document.getElementById("addN").addEventListener("click", getN);
            if (getN(array) != false) array.push(numUtente);
        }
        return array;
    } */
    
    
}
