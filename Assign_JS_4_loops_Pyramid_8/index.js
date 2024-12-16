// Number Pyramid
// Assignment:
// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for the height of the pyramid
rl.question("Enter the height of the pyramid: ", function (height) {
    height = parseInt(height);

    // Check if the input is a valid positive integer
    if (isNaN(height) || height <= 0) {
        console.log("Please enter a valid positive integer.");
        rl.close();
        return;
    }

    // Generate and display the pyramid
    for (let i = 1; i <= height; i++) {
        let row = '';

        // Add leading spaces for each row
        for (let j = 1; j <= height - i; j++) {
            row += ' '; // Adding spaces to center the pyramid
        }

        // Add numbers for each row
        for (let k = 1; k <= i; k++) {
            row += k + ' '; // Adding numbers with a space in between
        }

        // Display the row
        console.log(row);
    }

    rl.close();
});
//node Node24.JS