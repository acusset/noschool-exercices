/** Created by antoine */

const http = require('http');
const urls = process.argv.splice(2);
let responses = [];

urls.map((url, index) => {
    let total = '';
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', data => total += data);
        response.on('error', err => console.error);
        response.on('end', () => {
            responses[index] = total;
            if(responses.length === urls.length) {
                console.log(responses.join('\n'));
            }
        });
    });
});

