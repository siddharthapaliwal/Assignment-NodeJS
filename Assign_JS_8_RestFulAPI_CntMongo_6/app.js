const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string (replace with your own if using MongoDB Atlas)
const dbURI = 'mongodb://0.0.0.0:27017/itemsdb'; // For local MongoDB

// If you're using MongoDB Atlas, it would look something like:
// const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase';

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the Item model
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);

// GET /api/items - Get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find(); // Retrieve all items from the database
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve items.' });
  }
});

// POST /api/items - Create a new item
app.post('/api/items', async (req, res) => {
  const { name, category, price } = req.body;

  const newItem = new Item({ name, category, price });

  try {
    const savedItem = await newItem.save();
    res.status(201).json({
      message: 'Item created successfully',
      item: savedItem
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// PUT /api/items/:id - Update an item by ID
app.put('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;
  const { name, category, price } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(itemId, { name, category, price }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({
      message: 'Item updated successfully',
      item: updatedItem
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
