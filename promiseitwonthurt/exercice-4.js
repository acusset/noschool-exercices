'use strict';

function onRejected(error) {
    console.log(error.message);
}

let promise = new Promise((resolve, reject) => {
    resolve('J\'AI ETE APPELEE');
    reject(new Error('JE N\'AI PAS ETE APPELEE'));
});

promise.then(console.log, onRejected);
