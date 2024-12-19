const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const outputFile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";


// Read the contents of the input file, Asynchronous read method

fs.appendFile(outputFile,cntFile, 'utf8',
  // callback function
  function(err) {
  if (err) throw err;
  // if no error
  console.log("Data is appended to file successfully!")
  });

