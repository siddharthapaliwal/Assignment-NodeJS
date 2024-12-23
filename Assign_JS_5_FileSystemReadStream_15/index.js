let fs = require('fs'),

// Use fs.createReadStream() method
// to read the file
reader = fs.createReadStream('largeFile.txt');
let cntFile;
// Read and display the file data on console
reader.on('data', function (chunk) {
    console.log(chunk.toString());
    let writer = fs.createWriteStream('outputStream.txt') 
writer.write(chunk);
});

