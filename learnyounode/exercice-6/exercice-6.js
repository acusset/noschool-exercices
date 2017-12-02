/** Created by antoine */

let myFunction = require('./function');
const dir = process.argv[2];
const ext = process.argv[3];

myFunction(dir, ext, (err, data) => {
    if (err) {
        return console.error('There was an error', err);
    }
    console.log(data.join('\n'));
});