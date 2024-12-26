const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Import the User model

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

// GET route to fetch all users from the database
app.get('/users', async (req, res) => {
  try {
    // Use the User model to find all users in the database
    const users = await User.find();
    
    // Respond with the list of users
    res.status(200).json({
      message: 'Users retrieved successfully!',
      users: users, // Return the users as JSON
    });
  } catch (err) {
    // Handle any errors that occur during the query
    console.error('Error fetching users:', err);
    res.status(500).json({
      message: 'Error fetching users',
      error: err.message,
    });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
