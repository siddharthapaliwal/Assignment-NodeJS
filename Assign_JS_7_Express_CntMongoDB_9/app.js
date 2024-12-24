// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true,   // Email must be unique
    lowercase: true, // Convert email to lowercase
    trim: true,      // Trim any spaces from the email
  },
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);
const usr1= new User({
        name:"Siddharth",
        email:"sid.paliwal1989@gmail.com"


});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
