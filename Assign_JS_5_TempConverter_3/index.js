//Giving Input to a Node.js application Demo Example

// Importing the realine-sync module
const readline = require("readline-sync");

console.log("Enter C->for Celsius to Fahrenheit & F -> For Fahrenheit to Celsius")
// Taking a number input
let choice= readline.question();
console.log("Enter Tempreture");

let num = parseFloat(readline.question());
let res;
if (choice=='C' || choice=='c')
{
    res=(num * (9/5))+32;
}
else if(choice=='F' || choice=='f')
{
    res=(num - 32) * (5/9);    
}

console.log(res);
