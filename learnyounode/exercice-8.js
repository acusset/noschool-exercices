/** Created by antoine */

const http = require('http');
let total = '';

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', data => {
        total += data;
    });
    response.on('error', err => console.error);
    response.on('end', data => {
        console.log(total);
        console.log(total.length);
    });
});
