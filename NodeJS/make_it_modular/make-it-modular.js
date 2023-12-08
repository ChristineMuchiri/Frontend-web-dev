const mymodule = require('./mymodule');

const directoryName = process.argv[2];
const extension = process.argv[3];

mymodule(directoryName, extension, (err, data) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    data.forEach(file => {
        console.log(file);
    });
});
