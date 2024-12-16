// Importing the readline module to get user input
const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("I have chosen a number between 1 and 100. Can you guess it?");

// Function to prompt the user for a guess
const promptGuess = () => {
  rl.question("Guess a number between 1 and 100: ", (userInput) => {
    const guess = parseInt(userInput); // Convert the user's input to an integer

    // Check if the guess is valid
    if (isNaN(guess) || guess <= 0 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100.");
      return promptGuess(); // Prompt again
    }

    // Provide feedback based on the guess
    if (guess < randomNumber) {
      console.log("Too low! Try again.");
      promptGuess(); // Prompt again
    } else if (guess > randomNumber) {
      console.log("Too high! Try again.");
      promptGuess(); // Prompt again
    } else {
      console.log("Congratulations! You've guessed the number!");
      rl.close(); // Close the readline interface when the user guesses correctly
    }
  });
};

// Start the guessing game
promptGuess();