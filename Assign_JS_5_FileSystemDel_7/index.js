const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const inputfile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";

 
fs.unlink('newFile.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File is deleted.');
  }
});
