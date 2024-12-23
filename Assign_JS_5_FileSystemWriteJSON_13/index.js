// STEP 1: Reading JSON file 
const fs = require("fs");
const fileUser = require("./output");

// Defining new user 
let user =
{
    name: "Siddharth",
    age: 34,
    language: ["Python", "React", "JavaScript"]
};

 
fileUser.push(user);


fs.writeFile(
    "output.json",
    JSON.stringify(fileUser),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });