

// stampa in console di prova

// "console" -> contesto/macroarea a cui voglio accedere
// xxxx."metodo" -> azione che voglio eseguire
// xxxx.metodo("dato") -> dato che voglio dare in pasto al metodo


// dichiarazione di una variabile, CREAZIONE di essa
const nomeUno = "Danilo";

console.log(nomeUno);


// // dichiaro una variabile NON costante
let coloreMaglietta;

// variabile = valore -> "assegnazione"
coloreMaglietta = "Rosso";

// questi due modi di stampare in console stampano lo stesso contenuto
console.log("L'alunno si chiama " + nomeUno + " e il colore della maglietta è " + coloreMaglietta);
console.log(
  `L'alunno si chiama ${nomeUno} e il colore della maglietta è ${coloreMaglietta}.`
);


// _________________________________________________
	


// dichiarazione variabile
let miaStringa;
 
// assegnazione
miaStringa = 'ciao';
// utilizzo/richiamo
// alert(miaStringa);
 
// assegnazione
miaStringa = 'arrivederci';
// utilizzo/richiamo
// alert(miaStringa);




// _________________________________________________

let risultatoPrompt = prompt("Come ti chiami?");

console.log(risultatoPrompt);
