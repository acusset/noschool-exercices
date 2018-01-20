'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 300);
})

promise.then(() => {
    console.log('ACCOMPLIE !');
});
