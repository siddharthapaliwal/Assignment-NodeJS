const fs = require('fs');
const fsPromises = require('fs').promises;
 
// Use fsPromises.readFile() method
// to read the file
fs.promises.readFile("./promiseFile.txt")
    .then(function (result) {
        console.log("" + result);
    })
    .catch(function (error) {
        console.log(error);
    })