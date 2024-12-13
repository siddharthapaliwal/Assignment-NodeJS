//Giving Input to a Node.js application Demo Example

// Importing the realine-sync module
const readline = require("readline-sync");


console.log("Enter number-1");
let num1 = parseInt(readline.question());
console.log("Enter number-2");
let num2 = parseInt(readline.question());


console.log("Enter Operator +,-,*,/")
// Taking a number input
let choice= readline.question();
switch(choice)
{
    case '+':
        console.log ("Sum of Nos = "+ (num1+num2));
        break;
    case '-':
        console.log ("Subtraction of Nos = "+ (num1-num2));
        break;
    case '*':
        console.log ("Multiplication of Nos = "+ (num1*num2));
        break;
    case '/':
        console.log ("Division of Nos = "+ (num1/num2));
        break;
    default:
        console.log ("Wrong operator entered.");

}

