
// Function to calculate the sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each array element to the sum
    }
    return sum;
}

// Sample array
const sampleArray = [1, 2, 3, 4, 5];

// Call the function with the sample array and display the result
const result = sumArray(sampleArray);
console.log(`The sum of the array [${sampleArray}] is: ${result}`);
// node node36.js
