var fs = require('fs');
var path = require('path');
var filterdFiles = [];

function filterFiles(dir, ext, callBack) {
    
    fs.readdir(dir, function listMyFiles(err, files) {
        if (err) {
            console.error('Oops!');
            return callBack(err);
        } else {
            filterdFiles = files.filter(function (file) {
                return path.extname(file).substring(1) == ext;
            })
            callBack(null, filterdFiles);
        }
    })
}
module.exports = filterFiles;