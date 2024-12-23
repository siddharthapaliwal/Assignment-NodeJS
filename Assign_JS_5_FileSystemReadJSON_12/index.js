const fs = require("fs"); 

// Read users.json file 
fs.readFile("data.json", function(err, data) { 
    
    // Check for errors 
    if (err) throw err; 

    // Converting to JSON 
    const users = JSON.parse(data); 
    console.log(users); // Print users 
});