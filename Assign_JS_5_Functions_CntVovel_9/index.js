const prompt = require('prompt-sync')();

// Function to count the number of vowels in a string
function countVowels(str) {
  let vowelCount = 0; // Initialize count of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']; // List of vowels

  // Loop through the string and count occurrences of vowels
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) { // Check if the character is a vowel
          vowelCount++;
      }
  }
  return vowelCount; // Return the count of vowels
}

// Sample string
const sampleString = prompt("Enter a string to search the VOVELS: ");


// Call the function with the sample string and display the result
const result = countVowels(sampleString);
console.log(`The number of vowels in "${sampleString}" is: ${result}`);