// Define an object with at least three properties
const person = {
    name: 'Alice',
    age: 28,
    occupation: 'Software Developer'
};

// Use a for...in loop to iterate through the object
console.log('Object Properties and Values:');
for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}