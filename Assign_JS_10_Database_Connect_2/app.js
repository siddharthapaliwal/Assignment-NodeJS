// Import mongoose to handle MongoDB connection
const mongoose = require('mongoose');

// MongoDB Atlas connection string
const mongoURI = 'mongodb://0.0.0.0:27017/itemsdb'; // Replace with your connection string from MongoDB Atlas

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB :', err.message);
  });
