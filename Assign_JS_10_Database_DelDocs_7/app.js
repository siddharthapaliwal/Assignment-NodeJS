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

// DELETE route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params; // Extract user ID from the URL

  try {
    // Use Mongoose to find and delete the user by ID
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Respond with a success message
    res.status(200).json({
      message: 'User deleted successfully!',
      user: deletedUser,
    });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({
      message: 'Error deleting user',
      error: err.message,
    });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
