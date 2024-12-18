// Define two separate objects
const persons = {
    name: 'John',
    age: 30
};

const jobs = {
    title: 'Software Developer',
    company: 'Tech Corp'
};
console.log("Septrate Object");
console.log(persons);
console.log(jobs);

// Use Object.assign() to merge the two objects into a new object
console.log("After merging");
const mergedObjects = Object.assign({}, persons, jobs);

// Log the merged object
console.log(mergedObjects);

