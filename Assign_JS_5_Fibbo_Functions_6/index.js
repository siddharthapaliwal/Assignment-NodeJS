// Import the prompt-sync module
const prompt = require('prompt-sync')();
const terms = parseInt(prompt("Enter the number of terms in the Fibonacci sequence: "));
fibonacci(terms);


function fibonacci(terms) {
    console.log(`Fibonacci sequence up to ${terms} terms:`);
    let num1 = 0, num2 = 1;
    for (let i = 1; i <= terms; i++) {
        console.log(num1);  // Display the current Fibonacci number
        let nextTerm = num1 + num2;  // Calculate the next term
        num1 = num2;  // Move num1 to the next term
        num2 = nextTerm;  // Move num2 to the next term
      }
}









