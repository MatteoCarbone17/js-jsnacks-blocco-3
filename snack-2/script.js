
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.//



let listNumbers = [

];



let userNumber;
let total = 0 ;

while ( total < 50 ) {

    userNumber = parseInt(prompt('inserisci un numero'));
    total += userNumber 
    listNumbers.push(userNumber);
    console.log( listNumbers);

    
}

console.log( userNumber )
