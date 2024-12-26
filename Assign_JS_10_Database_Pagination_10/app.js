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

// GET route to retrieve users with pagination
app.get('/users', async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10 if not provided

  try {
    // Convert page and limit to numbers
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    // Calculate the number of documents to skip
    const skip = (pageNumber - 1) * limitNumber;

    // Get the users with pagination using Mongoose's .skip() and .limit()
    const users = await User.find()
      .skip(skip)      // Skip the documents for pagination
      .limit(limitNumber); // Limit the number of documents to the specified limit

    // Get the total number of users for pagination info
    const totalUsers = await User.countDocuments();

    // Return the paginated users and additional pagination info
    res.status(200).json({
      users: users,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        totalUsers: totalUsers,
        totalPages: Math.ceil(totalUsers / limitNumber),
      }
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
