const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/errorHandlingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Example Schema for Users
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// User Model
const User = mongoose.model('User', userSchema);

// Create a POST route to add a user
app.post('/users', async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    // Input validation (simple example)
    if (!name || !email || !age) {
      throw new Error('Name, email, and age are required fields.');
    }

    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);  // Pass errors to the error handler
  }
});

// Create a GET route to retrieve all users
app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      throw new Error('No users found');
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);  // Pass errors to the error handler
  }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  // Set the status code and send the error message
  res.status(500).json({
    message: err.message || 'Something went wrong!',
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
