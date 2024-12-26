const express = require('express');
const cors = require('cors');  // Importing the CORS middleware

const app = express();
const port = 3000;

// Enable CORS for all routes (allow all origins)
app.use(cors());

// Sample data (to simulate a database)
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Get an item by ID
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

// Add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1; // Auto-increment ID
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});