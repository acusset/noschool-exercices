/** Created by antoine */

const http = require('http');
const filename = process.argv[3];
const fs = require('fs');

const server = http.createServer((request, response) => {
    const src = fs.createReadStream(filename);
    src.pipe(response);
});

server.listen(process.argv[2]);