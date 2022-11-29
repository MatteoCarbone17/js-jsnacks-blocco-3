
/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


function getRandomNumberGenerator(min,max) {
    const randomNumber = Math.floor( (Math.random() * max) + (Math.random() * min));
    return randomNumber; 
}

let number =  getRandomNumberGenerator(prompt('inserisci primo numero'),prompt('inserisci secondo numero'))
console.log(number);