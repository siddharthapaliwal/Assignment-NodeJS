// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a starting number and an ending number
rl.question("Enter the starting number: ", function (start) {
    rl.question("Enter the ending number: ", function (end) {
        start = parseInt(start);
        end = parseInt(end);

        // Check if the inputs are valid numbers
        if (isNaN(start) || isNaN(end)) {
            console.log("Please enter valid numbers.");
            rl.close();
            return;
        }

        // Print odd numbers in the range from start to end
        console.log(`Odd numbers between ${start} and ${end}:`);
        for (let i = start; i <= end; i++) {
            if (i % 2 !== 0) {  // Check if the number is odd
                console.log(i);
            }
        }

        rl.close();
    });
});
//node+space+Node28.JS