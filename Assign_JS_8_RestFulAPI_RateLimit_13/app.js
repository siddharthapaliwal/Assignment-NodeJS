const express = require('express');
const rateLimit = require('express-rate-limit');  // Importing rate limiting middleware

const app = express();
const port = 3000;

// Define a rate limiter for the API
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
  max: 10,  // Maximum of 100 requests per IP in the windowMs time period
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,  // Include rate limit headers in the response
});

// Apply the rate limiter to all routes
app.use(limiter);

// Sample data (to simulate a database)
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Middleware to parse JSON request bodies
app.use(express.json());

// GET endpoint to retrieve all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// GET endpoint to retrieve a single item by ID
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

// POST endpoint to create a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1; // Auto-increment ID
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT endpoint to update an existing item
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

// DELETE endpoint to delete an item
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
  console.log(`Server running on http://localhost:${port}`);
});
