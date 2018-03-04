const http = require('http');
const mapThrough = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(mapThrough(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res)
    }else{
        res.write('send me a post request \n');
        res.end();
    }

})
server.listen(port);