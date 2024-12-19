const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths
const inputFile = 'sample.txt';   // Input file (the file to read from)


// Read the contents of the input file, Asynchronous read method
const data =fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    // If an error occurs, log the error and exit
    console.error('Error reading the file:', err);
    return;
  }
  else{
    console.log("Asynchronous read method:");
    console.log("Data in the file is - " + data.toString());

  }
});


console.log("Asynchronous read method:");

