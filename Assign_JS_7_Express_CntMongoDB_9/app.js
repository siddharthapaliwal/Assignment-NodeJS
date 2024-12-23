const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string (for MongoDB Atlas or local database)
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority'; // Replace with your MongoDB URI

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Define a simple schema and model for users
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);

// Define routes

// GET route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// POST route to create a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  // Create a new user document
  const user = new User({ name, email });

  try {
    await user.save(); // Save the user to the database
    res.status(201).json(user); // Send back the created user
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});

// Route to handle errors
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
