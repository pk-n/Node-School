const bl = require('bl');
const http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function getPromise(url) {
    return new Promise(function (resolve, reject) {
        http.get(url, function processResponse(resp) {
            resp.pipe(bl(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.toString());
                }
            }))
        })
    })
}

var p1 = getPromise(url1);
var p2 = getPromise(url2);
var p3 = getPromise(url3);

Promise.all([p1, p2, p3])
    .then(function onFullFilled(respArray) {
        respArray.forEach(function name(resp) {
            console.log(resp);
        })
    }, function onRejected(err) {
        console.log("Ayyo");
    })