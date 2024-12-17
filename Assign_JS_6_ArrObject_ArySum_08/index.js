// Define an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Create a function to calculate the sum of array elements
function sumArray(arr) {
    let total = 0; // Initialize a variable to store the sum
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // Add each element to the total
    }
    return total; // Return the total sum
}

// Call the function and store the result
const sum = sumArray(numbers);

// Display the sum
console.log('The sum of the array elements is:', sum);