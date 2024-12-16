// . Factorial Calculation
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a positive integer
const num = parseInt(prompt("Enter a positive integer: "));

// Initialize the factorial variable to 1
let factorial = 1;

// Check if the user entered a positive number
if (num < 0) {
    console.log("Please enter a positive integer.");
} else {
    // Use a for loop to calculate the factorial
    for (let i = 1; i <= num; i++) {
        factorial *= i;  // Multiply factorial by the current number
    }

    // Display the factorial
    console.log(`The factorial of ${num} is: ${factorial}`);
}
// Run the Program:
// If using prompt-sync, ensure it is installed:
// npm install prompt-sync
// Run the program:
// node+Space+file-name