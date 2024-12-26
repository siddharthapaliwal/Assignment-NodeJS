// Import mongoose
const mongoose = require('mongoose');

// Define a Mongoose schema for the User collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Ensure the name field is required
    minlength: 3,    // Minimum length for the name
    maxlength: 100,  // Maximum length for the name
  },
  email: {
    type: String,
    required: true, // Ensure the email field is required
    unique: true,   // Ensure the email is unique in the collection
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email format validation using regex
  },
  password: {
    type: String,
    required: true,  // Ensure the password field is required
    minlength: 6,    // Minimum length for the password
  }
});

// Create a Mongoose model from the schema
const User = mongoose.model('User', userSchema);

// Export the model to be used in other parts of the application
module.exports = User;
