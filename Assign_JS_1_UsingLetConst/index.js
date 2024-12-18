// Using 'let' - the value of the variable can be changed
let myVariable = 10;
console.log("Initial value of myVariable:", myVariable);

// Changing the value of the variable
myVariable = 20;
console.log("Updated value of myVariable:", myVariable);

// Using 'const' - the value of the variable cannot be changed once assigned
const myConstant = 30;
console.log("Initial value of myConstant:", myConstant);

// Attempting to change the value of the constant (this will throw an error)
try {
    myConstant = 40;  // This will throw an error
} catch (error) {
    console.log("Error while changing myConstant:", error.message);
}