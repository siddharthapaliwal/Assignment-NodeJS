//Giving Input to a Node.js application Demo Example

// Importing the realine-sync module
const readline = require("readline-sync");


console.log("Enter a year");
let y = parseInt(readline.question());

if (!isNaN(y))
{
if (y % 4 === 0) {
    if (y % 100 === 0) {
      if (y % 400 === 0) {
        console.log(y + " is a leap year");
      } else {
        console.log(y + " is not a leap year");
      }
    } else {
      //if year is divisible by 4 but not 100, it is a leap year
      console.log(y + " is a leap year");
    }
  } else {
    console.log(y + " is not a leap year");
  }
}
else{
    console.log("Not a valid year")
}