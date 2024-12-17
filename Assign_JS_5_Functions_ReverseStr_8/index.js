// Function to reverse a given string
function reverseString(str) {
  let reversed = ''; // Initialize an empty string to store the reversed result
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // Append characters in reverse order
  }
  return reversed; // Return the reversed string
}

// Sample string
const sampleString = "Hello, NodeJS!";

// Call the function with the sample string and display the result
const reversedString = reverseString(sampleString);
console.log(`The reversed string of "${sampleString}" is: "${reversedString}"`);