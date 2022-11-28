
// // Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.//


let arrayLong = [
    'element-1',
    'element-2',
    'element-3',
    'element-4',
    'element-5',
    'element-6',
    'element-7',
    'element-8',
]


let arrayShort = [
    'element-10',
    'element-11',
    'element-12',
    'element-13',
    'element-14',
]




while (arrayShort.length != arrayLong.length) {
    
    if (arrayShort.length < arrayLong.length ) {
        arrayShort.push('elemento');
        console.log(arrayShort);
    } else {
        arrayLong.push('elemento');
        console.log(arrayLong);
    }

}

