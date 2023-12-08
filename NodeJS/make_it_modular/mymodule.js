var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {

    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err);
        }

        const filteredFiles = files.filter(function (file) {
            return path.extname(file) === '.' + extension
        });
        callback(null, filteredFiles)
    });
};