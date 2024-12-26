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

// GET route to retrieve users with optional query parameters
app.get('/users', async (req, res) => {
  const { name, email } = req.query; // Extract query parameters from the URL

  try {
    // Create a filter object to store the query filters
    const filter = {};

    // If the name query parameter is provided, add it to the filter
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive match
    }

    // If the email query parameter is provided, add it to the filter
    if (email) {
      filter.email = { $regex: email, $options: 'i' }; // Case-insensitive match
    }

    // Use Mongoose to find users based on the filter
    const users = await User.find(filter);

    // Return the filtered users as a JSON response
    res.status(200).json({
      users: users,
    });
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({
      message: 'Error retrieving users',
      error: err.message,
    });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
