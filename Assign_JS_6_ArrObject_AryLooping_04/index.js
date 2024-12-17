// Define an array with at least five numbers
const numbers = [2, 4, 6, 8, 10];

// Loop through the array, square each number, and display the result
for (let i = 0; i < numbers.length; i++) {
    const squared = numbers[i] ** 2; // Calculate the square of the current number
    console.log(`The square of ${numbers[i]} is: ${squared}`);
}