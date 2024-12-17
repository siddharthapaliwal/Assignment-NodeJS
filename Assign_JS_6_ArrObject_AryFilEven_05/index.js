// Define an array with mixed numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Orignal Array");
console.log(numbers);
// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Check if the number is even
            evenNumbers.push(arr[i]); // Add the even number to the new array
        }
    }
    return evenNumbers; // Return the array of even numbers
}

// Call the function and log the filtered array to the console
const evenNumbers = filterEvenNumbers(numbers);
console.log('Even numbers:', evenNumbers);