var fs = require('fs');
var path = require('path');

const dirPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(dirPath, function (err, files) {
    if (err) {
        return console.log(err)
    }
    const filteredFiles = files.filter(file => {
        const fileExt = path.extname(file).slice(1);
        return fileExt === extension;
    });
    for (let inLine in filteredFiles) {
        console.log(filteredFiles[inLine]);
    }
});
