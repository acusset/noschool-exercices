/** Created by antoine */
const fs = require('fs');
const path = require('path');

module.exports = function filterDir(dir, extName, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        const list = files.filter(file => {
            return path.extname(file) === '.' + extName;
        });
        return callback(null, list);
    });
};