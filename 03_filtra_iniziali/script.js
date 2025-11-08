/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function parole(nomi, lettera) {
    const result = [];
    for (let i = 0; i < nomi.length; i++) {
        if (nomi[i][0] === lettera) {
            result.push(nomi[i]);
        }
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(parole(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]