/** Created by antoine */

const http = require('http');
const urls = process.argv.splice(2);

function getUrl(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let total = '';
            response.setEncoding('utf8');
            response.on('data', data => total += data);
            response.on('error', err => reject(err));
            response.on('end', () => resolve(total));
        });
    });
}
let promises = [];
promises = urls.map(getUrl);

Promise.all(promises)
    .then(data => console.log(data.join('\n')))
    .error(err => console.log(err));