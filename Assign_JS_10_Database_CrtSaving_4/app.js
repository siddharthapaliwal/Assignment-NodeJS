const mongoose = require('mongoose');
const User = require('./models/users'); // Import the User model

// MongoDB connection URI (replace with your actual MongoDB URI)
const mongoURI = 'mongodb://0.0.0.0:27017/itemsdb';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Example of creating a new user
    const newUser = new User({
      name: 'Rohit Paliwal',
      email: 'rohit.paliwal1989@gmail.com',
      password: 'password123',
    });

    // Save the new user to the database
    newUser.save()
      .then((user) => {
        console.log('User created:', user);
      })
      .catch((err) => {
        console.error('Error saving user:', err);
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
