

const fs = require('fs'); 
  
fs.watch("watch.txt", (eventType, filename) => { 
  console.log("\nThe file", filename, "was modified!"); 
  console.log("The type of change was:", eventType); 
}); 