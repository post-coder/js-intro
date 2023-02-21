// chiedi all'utente una password, 
// se è uguale a quella memorizzata nel codice, stampa "ACCESSO CONSENTITO"

/*
DATA una password memorizzata
- chiedere la password all'utente e memorizzala in una variabile
? è uguale alla password memorizzata? 
  ° Stampa "accesso consentito"
: ALTRIMENTI
  ° stampa "accesso negato"
*/

const password = "andrea&davide";

let userPassword = prompt("Inserisci la password");

if (userPassword == password) {

  console.log("accesso consentito");

} else {

  console.error("accesso negato");

}