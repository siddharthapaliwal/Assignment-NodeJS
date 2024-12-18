// Define an object representing a laptop
const laptop = {
    brand: 'Apple',
    model: 'MacBook Pro',
    price: 1999
};

// Use object destructuring to extract the properties
const { brand, model, price } = laptop;

// Log the extracted properties to the console
console.log(`Brand: ${brand}`);
console.log(`Model: ${model}`);
console.log(`Price: $${price}`);