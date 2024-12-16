// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a string
rl.question("Enter a string: ", function (inputString) {
    // Initialize a counter for vowels
    let vowelCount = 0;

    // Convert the string to lowercase for easier comparison
    inputString = inputString.toLowerCase();

    // Use a for loop to iterate through each character in the string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the character is a vowel
        if ('aeiou'.includes(inputString[i])) {
            vowelCount++; // Increment the vowel counter
        }
    }

    // Display the total number of vowels found
    console.log(`Total number of vowels in the string: ${vowelCount}`);

    rl.close();
});
