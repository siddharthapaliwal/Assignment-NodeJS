const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data (to simulate a database)
let items = [
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

// Update an existing item
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  let item = items.find(item => item.id === itemId);
  
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Update the item properties
  item = { ...item, ...req.body };
  items = items.map(i => (i.id === itemId ? item : i));

  res.json(item);
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const index = items.findIndex(item => item.id === itemId);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
