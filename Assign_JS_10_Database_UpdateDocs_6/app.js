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

// PUT route to update user by ID
app.put('/users/:id', async (req, res) => {
  const { id } = req.params; // Extract user ID from the URL
  const { name, email, password } = req.body; // Extract data from the request body

  try {
    // Use Mongoose to find the user by ID and update the user's information
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Respond with the updated user data
    res.status(200).json({
      message: 'User updated successfully!',
      user: updatedUser,
    });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({
      message: 'Error updating user',
      error: err.message,
    });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
