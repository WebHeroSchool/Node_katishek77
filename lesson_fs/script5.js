const path = require('path');
const fs = require('fs');

const content = fs.readFileSync("file1.txt");
let words = content.toString().replace(/\r\n/g, ' ').split(' ');

fs.watchFile(path.resolve('file1.txt'), (ev) => {
    const contentNew = fs.readFileSync("file1.txt");
    let wordsNew = contentNew.toString().replace(/\r\n/g, ' ').split(' ');

    if (words.length < wordsNew.length) {
        console.log('Файл изменился');
        for (let i = 0; i < wordsNew.length; i++) {
            if (words[i] !== wordsNew[i]) {
                console.log(wordsNew[i]);
            }
        }
        words = wordsNew;
    } else if (words.length > wordsNew.length) {
        console.log('Файл изменился, что-то удалили');
        console.log(wordsNew);
    } words = wordsNew;
});
