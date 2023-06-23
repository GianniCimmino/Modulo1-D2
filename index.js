/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono 5 tipi di datatype. 
Il primo è un numero. Qualsiasi numero si scrive la macchina lo legge cosi com'è. Es: let num1 = 123456
Il secondo è una stringa. In poche parole tutto quello che si scrive tra le "" la macchina lo riscrive. Es: let stringa1 = "Stringa"
Il terzo è il Boolean. In pratica con Boolean puoi verificare se quello che scrivi è vero o falso. Es: let boolean1 = 4 < 6 Il risultato è: true
Il quarto è null. Prendiamo una scatola e gli diciamo che è vuota, senza nulla all'interno. Es: let empty1 = null 
Il quinto è undefined. In questo caso prendiamo una scatola ma non diciamo alla macchina che cosa c'è all'interno. Es. let var1; Il risultato è: undefined */

/* ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in JavaScript è un gruppo di variabili contenute in un'unica variabile dichiarata.
Ad esempio dichiariamo una variabile: 
let tortaNutella = {
nutella: 500 
zucchero: 200
farina: 300
} 
nutella, zucchero e farina sono variabili che sono contenute da tortaNutella.*/



/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const theAddition = 12 + 20

console.log(theAddition)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "Gianni"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myNumber = 4

console.log(x - 4)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"

let name2 = "John"

let verifyName = name1 == name2

console.log(verifyName)

name1 = name1.toLowerCase();

name2 = name2.toLowerCase();

verifyName = name1 == name2

console.log(verifyName)