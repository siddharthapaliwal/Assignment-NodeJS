// Function to filter an array based on a specified condition
function filterArray(arr, condition) {
  let filteredArr = [];  // Array to store the elements that meet the condition

  // Loop through the array and apply the condition
  for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {  // If the element meets the condition
          filteredArr.push(arr[i]);  // Add the element to the filtered array
      }
  }

  return filteredArr;  // Return the filtered array
}

// Test the function with an example array and condition

// Sample array
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Condition function to filter even numbers
function isEven(num) {
  return num % 2 === 0;
}

// Condition function to filter odd numbers
function isOdd(num) {
  return num % 2 !== 0;
}

// Filter even numbers from the sample array
const evenNumbers = filterArray(sampleArray, isEven);
console.log(`Even numbers: ${evenNumbers}`);  // Display the even numbers

// Filter odd numbers from the sample array
const oddNumbers = filterArray(sampleArray, isOdd);
console.log(`Odd numbers: ${oddNumbers}`);  // Display the odd numbers