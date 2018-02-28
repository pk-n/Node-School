var http = require('http');
var url = process.argv[2];

http.get(url, function response(resp) {
    resp.setEncoding('utf8');
    resp.on('data', console.log);
    resp.on('error', console.error);
}).on('error', console.error);