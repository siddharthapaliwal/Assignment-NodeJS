// 1. Create a Set and add elements
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3); // Duplicate value, will be ignored

console.log("Set values: ", mySet); // Output: Set values:  Set { 1, 2, 3 }

// 2. Create a Map and add key-value pairs
const myMap = new Map();
myMap.set('name', 'Siddharth');
myMap.set('age', 34);
myMap.set('city', 'Paliwal');

// Log keys and values
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: John
// age: 30
// city: New York