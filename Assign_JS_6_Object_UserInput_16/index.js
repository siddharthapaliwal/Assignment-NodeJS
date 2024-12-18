// Import the readline module to accept user input
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name and age
rl.question('What is your name? ', (name) => {
    rl.question('What is your age? ', (age) => {
        // Create an object based on user input
        const user = {
            name: name,
            age: parseInt(age) // Convert age to a number
        };

        // Log the user object to the console
        console.log('User Object:', user);

        // Close the readline interface
        rl.close();
    });
});