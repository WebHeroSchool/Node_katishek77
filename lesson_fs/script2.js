const fs = require('fs');

const content = fs.readFileSync("file.txt");
let words = content.toString().replace(/\r\n/g,' ').replace(/—/g, '').split(' ');

let countWords = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] !== '' && words[i] != null) {
        countWords += 1;
        //console.log(words[i]);
    }
}
console.log(countWords);