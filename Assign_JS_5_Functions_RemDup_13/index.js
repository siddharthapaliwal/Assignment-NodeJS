// Function to remove duplicates from an array
function removeDuplicates(arr) {
  const uniqueArray = []; // Initialize an empty array to store unique values

  for (let i = 0; i < arr.length; i++) {
    // Check if the current value is not already in the uniqueArray
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]); // Add the value if it's not a duplicate
    }
  }

  return uniqueArray; // Return the array without duplicates
}

// Example array with duplicates
const sampleArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

// Call the function and display the result
const result = removeDuplicates(sampleArray);
console.log("Original Array:", sampleArray);
console.log("Array without duplicates:", result);
