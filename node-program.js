const bl = require('bl');
const http = require('http');

var url = process.argv[2];

http.get(url, function processResponse(resp) {
    resp.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        } else{
            strData = data.toString();
            console.log(strData.length)
            console.log(strData);
        }
    }))
})