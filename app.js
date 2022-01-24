const fs = require('fs');
const zlip = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');

const writeStream = fs.createWriteStream('./docs/new-text.txt');

const compressStream = zlip.createGzip();

// readStream.on('data', (chunk) => {
//     writeStream.write('-----CHUNK START-------');
//     writeStream.write(chunk);
//     writeStream.write('-----CHUNK END-------')
// })

const handleError = () => {
    console.log("Error");
    readStream.destroy();
    writeStream.end('Finished wish error...')
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);