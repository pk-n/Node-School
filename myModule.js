// This file is just for testing purpose
var http = require('http');


var options = {
    hostname: 'localhost',
    port: 8000, // update this to port where server is started
    path: '/api/parsetime?iso=' + new Date().toISOString(),
    method: 'GET'
};

var request = http.request(options, function name(resp) {
    resp.on('data', function (chunk) {
        console.log(chunk.toString());
    })
})


request.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});
request.end();