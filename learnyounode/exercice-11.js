/** Created by antoine */

const net = require('net');

const server = net.createServer(socket => {
    const date = new Date();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1;
    socket.write(date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes());
    socket.end('\n');
});

server.listen(process.argv[2]);