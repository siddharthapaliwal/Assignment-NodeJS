// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Importing the readline module to take user input
const readline = require('readline');

// Creating an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompting user for the minimum value
rl.question('Enter the minimum value: ', (min) => {
  // Prompting user for the maximum value
  rl.question('Enter the maximum value: ', (max) => {
      // Converting input to integers and generating the random number
      const randomNum = getRandomNumber(parseInt(min), parseInt(max));
      
      // Display the random number
      console.log(`A random number between ${min} and ${max} is: ${randomNum}`);
      
      // Closing the readline interface
      rl.close();
  });
});
// 
// 