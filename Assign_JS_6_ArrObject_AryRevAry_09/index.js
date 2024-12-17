// Define an array with at least five elements
const array = [1, 2, 3, 4, 5];

// Create a function to reverse the array
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]); // Add elements in reverse order
    }
    return reversedArray;
}

// Call the function and store the reversed array
const reversed = reverseArray(array);

// Log the reversed array to the console
console.log('Original Array:', array);
console.log('Reversed Array:', reversed);