
/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */


const listNumber = [
    1,
    2,
    4,
    6,
    3,
    3,
    4,
];

const secondListNumber = [
    1,
    2,
    3,
    5,
    6,
];


function sumArrayElement(array) {
    let sum = 0; 
    
    for (let i = 0; i < array.length ; i++) {
        sum += array[i];
    }

    return sum ;

}

console.log(sumArrayElement (listNumber));
console.log(sumArrayElement (secondListNumber));