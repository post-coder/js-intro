// chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/*
x memorizzare l'anno corrente
x chiedere l'età e memorizzarla
- sottrarre all'anno corrente l'età dell'utente
- stamparla
*/

const annoCorrente = 2023;

let anniUtente = prompt("Quanti anni hai?");

let annoDiNascita = annoCorrente - anniUtente;

// console.log("Sei nato nel " + annoDiNascita + " / " + (annoDiNascita - 1));
console.log(`Sei nato nel ${annoDiNascita - 1} / ${annoDiNascita}`)
