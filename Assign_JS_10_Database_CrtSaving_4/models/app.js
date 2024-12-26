const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/Users'); // Import the User model

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// MongoDB URI (replace with your MongoDB URI)
const mongoURI = 'mongodb://0.0.0.0:27017/itemsdb';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// POST route to create a new user
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new User instance using the provided data
  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    // Save the new user to the database
    const savedUser = await newUser.save();
    // Respond with the saved user data
    res.status(201).json({
      message: 'User created successfully!',
      user: savedUser,
    });
  } catch (err) {
    // Handle errors (e.g., validation, duplicate email)
    console.error('Error saving user:', err);
    res.status(400).json({
      message: 'Error creating user',
      error: err.message,
    });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
