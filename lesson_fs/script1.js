const fs = require('fs');

const filenames = fs.readdirSync(__dirname);
for (let i = 0; i < filenames.length; i++) {
    filenames.sort();
    console.log(filenames[i]);
}