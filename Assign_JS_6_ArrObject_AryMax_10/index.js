// Define an array of numbers
const numbers = [10, 25, 37, 50, 12, 48];

// Create a function to find the maximum value in an array
function findMaxValue(arr) {
    let max = arr[0]; // Initialize the maximum value as the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { // Compare each element with the current max
            max = arr[i]; // Update max if a larger value is found
        }
    }
    return max; // Return the maximum value
}

// Call the function and store the result
const maxValue = findMaxValue(numbers);

// Display the maximum value
console.log('The maximum value in the array is:', maxValue);