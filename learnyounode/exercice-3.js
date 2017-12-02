/** Created by antoine */
const fs = require('fs');

lines =
    fs
        .readFileSync(process.argv[2])
        .toString()
        .split(/\n/)
        .length - 1;

console.log(lines);