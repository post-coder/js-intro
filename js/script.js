// per scrivere qualcosa in pagina:
document.writeln("Prova di foglio di script esterno");

// possiamo anche notificare qualcosa di importante
// all'utente:
// alert("Prova");


// voglio modificare il titolo della pagina

// mi serve un modo per bersagliarlo
// gli do quindi un id

// tramite js è possibile ottenere un elemento 
// del documento attraverso il suo id
// "document.getElementById("valore)"

// una volta che abbiamo l'elemento, possiamo accedere al suo HTML interno
// ".innerHTML"

// e possiamo cambiarlo, utilizzando l'assegnazione
// " = "

// document.getElementById("title").innerHTML = "Pagina di Gabriel Spanu";

// modificare il contenuto del secondo titolo
document.getElementById("title").innerHTML = "nuovo contenuto<br><small>testo piccolino a capo</small>";

// un alert che visualizza il testo dentro il mio titolo
alert( document.getElementById("title").innerText);