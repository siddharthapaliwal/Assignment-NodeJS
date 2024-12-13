//Giving Input to a Node.js application Demo Example

// Importing the realine-sync module
const readline = require("readline-sync");


console.log("Enter number-1");
let num1 = parseInt(readline.question());
console.log("Enter number-2");
let num2 = parseInt(readline.question());
console.log("Enter number-3");
let num3 = parseInt(readline.question());


let largestNum;

if (num1 > num2 && num1 > num3) {
    largestNum = num1;
  } 
  else if (num2 > num1 && num2 > num3) {
    largestNum = num2;
  } 
  else {
    largestNum = num3;
  }

  console.log   ("Largest No = "+ largestNum);
    


