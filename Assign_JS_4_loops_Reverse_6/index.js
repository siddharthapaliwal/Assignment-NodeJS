// Prompt the user for a string using the readline module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a string
rl.question("Enter a string to reverse: ", function(userString) {
  let reversedString = '';

  // Use a for loop to build the string in reverse order
  for (let i = 0; i < userString.length; i++) {
    reversedString = userString[i] + reversedString; // Add each character to the front
  }

  // Display the reversed string
  console.log("Reversed string:", reversedString);

  // Close the readline interface
  rl.close();
});
// node Node21.JS