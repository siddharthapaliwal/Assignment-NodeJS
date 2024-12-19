const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const inputfile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";

 
fs.rename('output.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully');
});
