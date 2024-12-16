// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a starting number
const startNumber = parseInt(prompt("Enter a number to start the countdown: "));

// Initialize the current number to the starting number
let currentNumber = startNumber;

// Use a while loop to count down to zero
while (currentNumber >= 0) {
    // Display the current number
    console.log(currentNumber);

    // Decrease the current number by 1
    currentNumber--;
}

// Display "Blast off!" when the countdown reaches zero
console.log("Blast off!");
// Run the Program:
// If using prompt-sync, make sure it is installed:
// npm install prompt-sync
// Run the program:
// node+space+fileName.js