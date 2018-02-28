var myMod = require('./myModule');

var dir = process.argv[2];
var fileType = process.argv[3];

function printFiles(err, files) {
    if (err) {
       return console.error("Oops!");
    }else {
        files.forEach(file => {
            console.log(file);
        });
    }
}
myMod(dir, fileType, printFiles);
