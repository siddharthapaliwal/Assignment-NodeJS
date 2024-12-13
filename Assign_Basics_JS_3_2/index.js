// Declare variables of different data types
/*
JavaScript syntax is the set of rules, how JavaScript programs are constructed:
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped. This means:

If you create a variable outside of a function, you can use it anywhere in your code.
If you create a variable inside a function, you can only use it within that function.
JavaScript let keyword
The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).
JavaScript const
The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.

const is similar to let, but with one big difference: once you assign a value to a const variable, you can’t change it later. Like let, const is block-scoped.

*/

let name = "Siddharth"; // String
let age = 25;           // Number (Integer)
let height = 5.9;       // Number (Float)
let isStudent = true;   // Boolean
let hobbies = ["Reading", "Coding", "Traveling"]; // Array
let address = {         // Object
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India"
};

// Log the variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Height:", height);
console.log("Is a Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

// Perform basic arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;         // Addition
let difference = num2 - num1;  // Subtraction
let product = num1 * num2;     // Multiplication
let quotient = num2 / num1;    // Division
let remainder = num2 % num1;   // Modulus (Remainder)

// Output the results of arithmetic operations
console.log("\nArithmetic Operations:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Use template literals to display results in a single string
console.log(`\nSummary:
Name: ${name}
Age: ${age}
Height: ${height} ft
Is Student: ${isStudent}
Address: ${address.city}, ${address.state}, ${address.country}
Hobbies: ${hobbies.join(", ")}

Arithmetic Operations:
Sum = ${sum}
Difference = ${difference}
Product = ${product}
Quotient = ${quotient}
Remainder = ${remainder}`);

//run command node Node3.JS