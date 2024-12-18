const numbers = [1, 2, 3, 4, 5];

// 1. Use map to square each number
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 2. Use filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

// 3. Use reduce to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum); // Output: 15