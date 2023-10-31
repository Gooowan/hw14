const fs = require('fs');

function readSync(filePath) {
    const data = fs.readFileSync(filePath);
    console.log('sync done');
    return data;
}

function readAsync(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        callback(data);
        console.log('async done');
    });
}

module.exports = {
    readSync,
    readAsync
}