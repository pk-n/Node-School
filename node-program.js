const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    var data = fs.createReadStream(filePath)
    data.pipe(res)
})
server.listen(port);