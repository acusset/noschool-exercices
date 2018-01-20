'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 300);
})
    .then(() => {
    console.log('ACCOMPLIE !');
});
