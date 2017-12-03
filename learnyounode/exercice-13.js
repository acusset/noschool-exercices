/** Created by antoine */

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    request.setEncoding('utf8');

    const object = url.parse(request.url, true);
    const time = new Date(object.query.iso);

    let responseBody = {};

    if (object.pathname === '/api/parsetime') {
        responseBody.hour = time.getHours();
        responseBody.minute = time.getMinutes();
        responseBody.second = time.getSeconds();
    } else if (object.pathname === '/api/unixtime') {
        responseBody.unixtime = time.getTime()
    }

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(responseBody));
});

server.listen(process.argv[2]);