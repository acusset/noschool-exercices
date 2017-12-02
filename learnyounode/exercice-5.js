/** Created by antoine */
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, (err, list) => {
    if (err) {
        return console.log(err);
    }
    console.log(list.filter(file => path.extname(file) === ext).join('\n'));
});