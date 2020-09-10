const path = require('path');
const fs = require('fs');

const content = fs.readFileSync("file3.txt");
const words = content.toString().split('\r\n');

const absolutePath = words.map(file => path.resolve(__dirname, file));

console.log(absolutePath);

for (let i = 0; i < absolutePath.length; i++) {
    if (fs.existsSync(absolutePath[i]) === true) {
        console.log(absolutePath[i]);
    }
}
