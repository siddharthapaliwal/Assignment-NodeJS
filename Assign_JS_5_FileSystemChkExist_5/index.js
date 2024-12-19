const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const inputfile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";

 
// Using fs.exists() method
fs.exists('output.txt', (exists) => {
  console.log(exists ? 'File already Exist' : 'File Not Found!');
});

