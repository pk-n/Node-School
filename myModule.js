// This file is just for testing purpose
var http = require('http');
var options = {
    hostname: 'localhost',
    port: 8000, // update this to port where server is started
    path: '/',
    method: 'POST'
};

var request = http.request(options, function name(resp) {
    resp.on('data', function (chunk) {
        console.log(chunk.toString());
    })
})

var postData = "hello world";
request.write(postData);

request.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
request.end();