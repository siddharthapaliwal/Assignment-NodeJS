// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a positive integer
const num = parseInt(prompt("Enter a positive integer: "));

// Initialize sum to 0
let sum = 0;

// Use a for loop to calculate the sum of numbers from 1 to num
for (let i = 1; i <= num; i++) {
  sum += i;  // Add the current number to sum
}

// Display the result
console.log(`The sum of numbers from 1 to ${num} is: ${sum}`);
// npm install prompt-sync
// node+space+file_Name