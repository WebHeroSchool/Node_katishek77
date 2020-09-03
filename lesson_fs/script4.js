const fs = require('fs');

const content = fs.readFileSync("file1.txt");
let words = content.toString().replace(/\r\n/g, ' ').split(' ');

const contentNew = fs.readFileSync("file2.txt");
let wordsNew = contentNew.toString().replace(/\r\n/g, ' ').split(' ');

for (let i = 0; i < wordsNew.length || i < words.length; i++) {
    if (words[i] !== wordsNew[i]) {
        console.log('файл 1: ' + words[i] + ' ' + 'файл 2:' + wordsNew[i]);
    }
}

