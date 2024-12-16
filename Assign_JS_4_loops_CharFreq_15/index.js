// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a string
rl.question("Enter a string: ", function (inputString) {
    // Initialize an object to store the character frequencies
    let charFrequency = {};

    // Use a loop to iterate through the string and count the occurrences of each character
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];

        // If the character already exists in the object, increment its count
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            // Otherwise, initialize the count to 1
            charFrequency[char] = 1;
        }
    }

    // Display the character counts in a formatted output
    console.log("Character frequencies:");
    for (let char in charFrequency) {
        console.log(`'${char}': ${charFrequency[char]}`);
    }

    rl.close();
});
