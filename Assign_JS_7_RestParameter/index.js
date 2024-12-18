// Define a function sumAll that uses rest parameters
function sumAll(...numbers) {
    // Use the reduce method to sum all the numbers
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Call the function with different sets of numbers
  console.log(sumAll(1, 2, 3, 4)); // Output: 10
  console.log(sumAll(5, 10, 15)); // Output: 30
  console.log(sumAll(7, 8, 9, 10, 11)); // Output: 45
  