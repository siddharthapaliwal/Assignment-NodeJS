// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Ask the user the question
const answer = prompt("What is the capital of France? ").toLowerCase();

// Check if the answer is correct
if (answer === "paris") {
  console.log("Correct! Paris is the capital of France.");
} else {
  console.log("Incorrect. The correct answer is Paris.");
}
// Run the Program:

// If using prompt-sync, ensure it is installed:
// npm install prompt-sync
// Run the program:
// node+space+filename