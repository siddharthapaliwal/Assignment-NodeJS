// Function for addition
function add(num1, num2) {
    return num1 + num2;
}

// Function for subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function for multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function for division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero.";
    } else {
        return num1 / num2;
    }
}

// Prompt the user for input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function (num1) {
    rl.question("Enter the operator (+, -, *, /): ", function (operator) {
        rl.question("Enter the second number: ", function (num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            // Perform the calculation based on the operator
            let result;
            if (operator === '+') {
                result = add(num1, num2);
            } else if (operator === '-') {
                result = subtract(num1, num2);
            } else if (operator === '*') {
                result = multiply(num1, num2);
            } else if (operator === '/') {
                result = divide(num1, num2);
            } else {
                result = "Invalid operator. Please use +, -, *, or /.";
            }

            // Display the result
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
