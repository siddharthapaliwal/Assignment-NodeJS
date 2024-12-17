const readline = require("readline-sync");


function isEven(chkValue) {
  
  if(chkValue % 2 == 0) {
    return "No is Even"
}

// if the number is odd
else {
    return "No is Odd"
}
  

  
}
console.log("Enter a No : ");
let num = Number(readline.question());

console.log(isEven(num));

