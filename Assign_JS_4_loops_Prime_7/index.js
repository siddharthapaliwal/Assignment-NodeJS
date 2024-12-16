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

    console.log(`Prime numbers up to ${limit}:`);

    // Use a for loop to check for prime numbers up to the limit
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        // Check if the number is divisible by any number from 2 to the square root of the number
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // No need to check further if divisible
            }
        }

        // If the number is prime, display it
        if (isPrime) {
            console.log(num);
        }
    }

    rl.close();
});
// node+Space+Node23.JS