const net = require('net');
const strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function (socket) {
    var data = strftime('%F %H:%M', new Date());
    socket.write(data + "\n");
    socket.end();
})

server.listen(Number(port));