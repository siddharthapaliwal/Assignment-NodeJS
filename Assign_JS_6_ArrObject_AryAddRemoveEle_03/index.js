// Define an array with three fruits
const fruits = ['Apple', 'Banana', 'Cherry'];

// Add a new fruit to the end of the array using the push method
console.log('Orignal array', fruits);

fruits.push('Mango');
console.log('After adding a new fruit:', fruits);

// Remove the last fruit from the array using the pop method
const removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);

// Display the updated array
console.log('Updated array:', fruits);