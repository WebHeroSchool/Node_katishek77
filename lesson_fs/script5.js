const path = require('path');
const fs = require('fs');

function contentDiff(filename) {
    const content = fs.readFileSync(filename);
    let words = content.toString().replace(/\r\n/g, ' ').split(' ');
    return (words);
}

let words1 = contentDiff(path.resolve("file1.txt"));

fs.watchFile(path.resolve('file1.txt'), (ev) => {
    let words2 = contentDiff(path.resolve("file1.txt"));

    if (words1.length <= words2.length) {
        console.log('Файл изменился');
        for (let i = 0; i < words2.length; i++) {
            if (words1[i] !== words2[i] && words2[i] !== '') {
                console.log(words2[i]);
            } else if (words1[i] !== words2[i] && words2[i] === '') {
                console.log(words2[i] + 'пусто');
            }
        }
    }
    else if (words1.length > words2.length) {
        console.log('Файл изменился, что-то удалили');
        console.log(words2);
    }
    words1 = words2;
});
/* У меня сравнение по словам, а не по строкам.
Нужно именно построчно сравнивать?
 */