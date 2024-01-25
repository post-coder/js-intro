// per accedere al contenuto di questa pagina dobbiamo verificare
// che l'utente sia maggiorenne
// in base all'anno di nascita dell'utente

// come possiamo scrivere in pagina l'età dell'utente?

// gli possiamo chiedere soltanto il suo anno di nascita

/*
Calcolare l'età dell'utente in base all'anno di nascita

- chiediamo l'anno di nascita
- memorizziamo l'anno in una variabile
- dichiariamo una variabile "age"
- sottrarre l'anno corrente - variabile memorizzata
- scrivere nel documento l'età calcolata

*/

let year;
year = prompt("In quale anno sei nato?");

// year = Number(year);

let age;


age = 2024 - year;

// per sapere di nascosto il valore delle nostre variabili possiamo usare il log
console.log(year);
console.log(age);


document.getElementById("title").innerHTML = 
    `Sei del ${year}, <br>
    Hai ${age} anni.`
;