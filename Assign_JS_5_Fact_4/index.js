// Import readline module for user input
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // Multiply result by each number from 2 to num
    }
    return result;
}

// Prompt the user for a number
rl.question('Enter a positive integer to calculate its factorial: ', (input) => {
    const number = parseInt(input);

    // Validate user input
    if (isNaN(number) || number < 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        const result = factorial(number);
        console.log(`The factorial of ${number} is: ${result}`);
    }

    // Close the interface
    rl.close();
});