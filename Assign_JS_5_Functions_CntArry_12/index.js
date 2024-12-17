// Function to concatenate two arrays
function concatArrays(array1, array2) {
  return array1.concat(array2); // Use the concat method to combine the arrays
}

// Sample arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// Call the function with the sample arrays
const combinedArray = concatArrays(array1, array2);

// Display the combined array
console.log("Combined Array:", combinedArray);