// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a number
const number = parseInt(prompt("Enter a number to display its multiplication table: "));

// Display the multiplication table header
console.log(`\nMultiplication table for ${number}:\n`);

// Use a for loop to display the multiplication table from 1 to 10
for (let i = 1; i <= 10; i++) {
  let result = number * i;  // Multiply the number by the current loop counter
  console.log(`${number} x ${i} = ${result}`);  // Display the result
}
// Run the Program:
// If using prompt-sync, make sure it is installed:
// npm install prompt-sync
// Run the program:
// node+Space+FileName.js