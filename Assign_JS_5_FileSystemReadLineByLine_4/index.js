const fs = require('fs');  // Import the 'fs' module for file system operations

// Specify the file paths

const inputfile = 'output.txt';   // Input file (the file to read from)
const cntFile = "This data is to be append";

fs.readFile(inputfile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const arr = data.split(/\r?\n/)

   console.log(arr);

  
});
