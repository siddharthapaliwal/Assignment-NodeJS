// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for the number of terms in the Fibonacci sequence
const terms = parseInt(prompt("Enter the number of terms in the Fibonacci sequence: "));

// Initialize the first two terms of the Fibonacci sequence
let num1 = 0, num2 = 1;

// Display the Fibonacci sequence
console.log(`Fibonacci sequence up to ${terms} terms:`);

// Loop to generate the Fibonacci sequence
for (let i = 1; i <= terms; i++) {
  console.log(num1);  // Display the current Fibonacci number
  let nextTerm = num1 + num2;  // Calculate the next term
  num1 = num2;  // Move num1 to the next term
  num2 = nextTerm;  // Move num2 to the next term
}
// Run the Program:

// If using prompt-sync, make sure it is installed:
// npm install prompt-sync
// Run the program:
// node+space+fileName.js