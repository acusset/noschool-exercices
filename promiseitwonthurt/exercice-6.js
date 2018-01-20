'use strict';

let reject = Promise.reject(new Error('REJECT !'))

function onReject(error) {
    console.log(error.message);
}

reject.catch(onReject);
