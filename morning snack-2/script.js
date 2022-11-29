
/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */


const listNumber = [
    1,
    2,
    45,
    676,
    34,
    33,
    4535,
];


function sumArrayElement(listNumber) {
    let sum = 0; 
    for (let i = 0; i< listNumber.length ; i++) {
        sum += listNumber[i];
    }

    return sum ;

}

let sum = sumArrayElement();
console.log(sum)