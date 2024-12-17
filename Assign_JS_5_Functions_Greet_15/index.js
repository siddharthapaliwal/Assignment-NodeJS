// Function to greet the user
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome!`);
}

// Importing the readline module to take user input
const readline = require('readline');

// Creating an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter their name
rl.question('What is your name? ', (name) => {
  // Call the greetUser function with the input name
  if (name.trim() === '') {
      console.log('Please enter a valid name.');
  } else {
      greetUser(name);
  }
  
  // Close the readline interface
  rl.close();
});
// node node46.js