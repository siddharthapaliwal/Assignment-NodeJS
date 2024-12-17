// Function to find the maximum number in an array
function findMax(arr) {
  if (arr.length === 0) {
      return null; // Handle empty array case
  }

  let max = arr[0]; // Assume the first element is the maximum
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]; // Update max if current element is greater
      }
  }
  return max; // Return the maximum value
}

// Sample array
const sampleArray = [5, 12, 48, 20, 15];

// Call the function with the sample array and display the result
const maxNumber = findMax(sampleArray);
if (maxNumber !== null) {
  console.log(`The maximum number in the array [${sampleArray}] is: ${maxNumber}`);
} else {
  console.log('The array is empty.');
}
// node node38.js