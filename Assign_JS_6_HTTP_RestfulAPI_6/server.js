const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage for items (array)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET: Get all items
app.get('/api/items', (req, res) => {
  res.status(200).json(items);
});

// GET: Get a single item by ID
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).send('Item not found');
  }
  res.status(200).json(item);
});

// POST: Create a new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }

  const newItem = {
    id: items.length + 1, // Simple way to generate an ID (incremental)
    name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT: Update an existing item
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).send('Item not found');
  }

  const { name } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }

  item.name = name;
  res.status(200).json(item);
});

// DELETE: Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Item not found');
  }

  const deletedItem = items.splice(index, 1);
  res.status(200).json(deletedItem[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
