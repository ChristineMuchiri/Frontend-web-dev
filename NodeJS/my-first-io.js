const fs = require('fs');

const filePath = process.argv[2]
const fileContent = fs.readFileSync(filePath);

const str = fileContent.toString();

function newLines(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n') {
            count++;
        }
    }
    return count;
}
const noOfNewLines = newLines(str);
console.log(noOfNewLines);
