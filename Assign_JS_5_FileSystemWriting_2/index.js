const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths
const outputFile = 'output.txt';   // Input file (the file to read from)
const cntFile = "Hello content for writefile";


// Read the contents of the input file, Asynchronous read method

fs.writeFile(outputFile, cntFile, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Content wrtite successfully");
  }
});


