// chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

/*
- chiedere all'utente il suo nome
- memorizzarlo in una variabile
- stamparlo in pagina
*/

let nomeUtente;

nomeUtente = prompt("Come ti chiami?")

document.writeln("Ciao " + nomeUtente);

// document.writeln(`Ciao ${prompt("funziona")}`);

