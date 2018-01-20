'use strict';

function onRejet(error) {
    console.log(error.message);
}

let promise = new Promise((resolve, reject) => {
    resolve('VALEUR DE LA PROMESSE');
    reject(new Error('REJET !'));
});

promise.then(console.log, onRejet);

console.log('PROGRAMME PRINCIPAL');
