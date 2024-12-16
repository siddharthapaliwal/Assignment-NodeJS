// Program: Traffic Light Simulation
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user to input the color of the traffic light
const color = prompt("Enter the traffic light color (Red, Yellow, Green): ").toLowerCase();

// Use a switch statement to determine the action
switch (color) {
  case 'red':
    console.log("Stop");
    break;
  case 'yellow':
    console.log("Caution");
    break;
  case 'green':
    console.log("Go");
    break;
  default:
    console.log("Invalid color.");
}