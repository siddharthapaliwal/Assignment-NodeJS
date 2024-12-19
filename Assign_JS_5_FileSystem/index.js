const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths
const inputFile = 'input.txt';   // Input file (the file to read from)
const outputFile = 'output.txt'; // Output file (the file to write to)

// Read the contents of the input file, Asynchronous read method
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    // If an error occurs, log the error and exit
    console.error('Error reading the file:', err);
    return;
  }

  // Write the data into the output file
  fs.writeFile(outputFile, data, (err) => {
    if (err) {
      // If an error occurs while writing, log it
      console.error('Error writing to the file:', err);
    } else {
      // If successful, log a message
      //console.log(`The contents of ${inputFile} have been written to ${outputFile}`);
    }
  });
});

//Synchronous read method


console.log("Synchronous read method:");
var data = fs.readFileSync('input.txt');

fs.writeFileSync("output1.txt", data); 

console.log("Data in the file is - " + data.toString());