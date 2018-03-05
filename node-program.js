const http = require('http');
const url = require('url')
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    var urlInfo = url.parse(req.url, true);
    var date = new Date(urlInfo.query.iso);
    var data;

    if (urlInfo.pathname == '/api/parsetime') {
        data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (urlInfo.pathname == '/api/unixtime') {
        data = {
            unixtime: date.getTime()
        }
    }
    if (data) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(data));   
    } else {
        res.writeHead(404);
        res.end();
    }
})
server.listen(port);