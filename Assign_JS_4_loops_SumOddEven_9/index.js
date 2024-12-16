// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a positive integer limit
rl.question("Enter a positive integer as the limit: ", function (limit) {
    limit = parseInt(limit);

    // Check if the input is a valid positive integer
    if (isNaN(limit) || limit <= 0) {
        console.log("Please enter a valid positive integer.");
        rl.close();
        return;
    }

    // Initialize sums for even and odd numbers
    let evenSum = 0;
    let oddSum = 0;

    // Use a for loop to iterate through the numbers
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            evenSum += i;  // Add to evenSum if the number is even
        } else {
            oddSum += i;   // Add to oddSum if the number is odd
        }
    }

    // Display the sums
    console.log(`Sum of even numbers from 1 to ${limit}:`, evenSum);
    console.log(`Sum of odd numbers from 1 to ${limit}:`, oddSum);

    rl.close();
});
// node+space+Node25.JS