const fs = require('fs');

function contentDiff(filename) {
    const content = fs.readFileSync(filename);
    let words = content.toString().replace(/\r\n/g, ' ').split(' ');
    return(words);
}

let words1 = contentDiff("file1.txt");
let words2 = contentDiff("file2.txt");

for (let i = 0; i < words1.length || i < words2.length; i++) {
    if (words1[i] !== words2[i]) {
        console.log('файл 1: ' + words1[i] + ' ' + 'файл 2:' + words2[i]);
    }
}
/* i < words1.length || i < words2.length - при этом условии как раз не потеряем выводы строки/слова бОльшего файла.
Здесь проверяется как один массив, так и другой, т.е. либо - либо.
Если файл1 больше файла2, то цикл всё равно сработает и выведет "файл 1: Hello! файл 2:undefined" и наоборот,
если файл1 меньше файла2, то выведет "файл 1:undefined файл 2: Hello!"
Не идеально, но тем не менее:)
 */

