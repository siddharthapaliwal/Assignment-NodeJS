const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const inputfile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";

const path = require('path');

fs.mkdir(path.join(__dirname, 'test'),
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });