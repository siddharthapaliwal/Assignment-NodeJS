// Node.js program to demonstrate the
// fs.readdir() method

// Import the filesystem module
const fs = require('fs');

// Function to get current filenames
// in directory
let dirname=__dirname+"/myFiles";
fs.readdir(dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      console.log(file);
    })
  }
})

