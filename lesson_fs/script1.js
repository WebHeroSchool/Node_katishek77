const fs = require('fs');

const filenames = fs.readdirSync(__dirname);
filenames.sort();
for (let i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}