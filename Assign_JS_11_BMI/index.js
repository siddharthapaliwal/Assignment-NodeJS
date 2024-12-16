// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for their weight and height
const weight = parseFloat(prompt("Enter your weight in kilograms: "));
const height = parseFloat(prompt("Enter your height in meters: "));

// Calculate the BMI
const bmi = weight / (height * height);

// Determine the BMI category
let category;
if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
  category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obesity";
}

// Display the BMI and category
console.log(`Your BMI is ${bmi.toFixed(2)}.`);
console.log(`You are classified as: ${category}.`);


// Run the Program:

// If using prompt-sync, ensure it is installed:
// npm install prompt-sync
// Run the program:
// node+space+filename