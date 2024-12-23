const fs = require('fs');

// Get the current filenames
// before the function

console.log("\nFile Contents of example_file:",
    fs.readFileSync("orignal.txt", "utf8"));

// Copying the file to a the same name
fs.copyFile("orignal.txt", "copy.txt", (err) => {
    if (err) {
        console.log("Error Found:", err);
    }
    else {



        console.log("\nSuccessfully Copied");
      
    }
});

