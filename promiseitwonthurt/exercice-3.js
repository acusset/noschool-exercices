'use strict';

function onRejet(error) {
    console.log(error.message);
}

let promise = new Promise((resolve, reject) => {
    setTimeout(
        reject,
        300,
        new Error('REJET !')
    );
});

promise.then(undefined, onRejet);
