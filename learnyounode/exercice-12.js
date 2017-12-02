/** Created by antoine */

const http = require('http');
const filename = process.argv[3];
const fs = require('fs');

const server = http.createServer((request, response) => {
    request.setEncoding('utf8');
    if('POST' === request.method) {
        request.on('data', data => {
            response.write(data.toUpperCase());
        });
    }
});

server.listen(process.argv[2]);