const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data (simulating a database)
let itemsV1 = [
  { id: 1, name: 'Item 1 (v1)' },
  { id: 2, name: 'Item 2 (v1)' },
  { id: 3, name: 'Item 3 (v1)' }
];

let itemsV2 = [
  { id: 1, name: 'Item 1 (v2)' },
  { id: 2, name: 'Item 2 (v2)' },
  { id: 3, name: 'Item 3 (v2)' },
  { id: 4, name: 'Item 4 (v2)' } // New item in v2
];

// Version 1 API
const v1Router = express.Router();

v1Router.get('/items', (req, res) => {
  res.json(itemsV1);
});

v1Router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = itemsV1.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

// Version 2 API (with an extra item and some changes)
const v2Router = express.Router();

v2Router.get('/items', (req, res) => {
  res.json(itemsV2);
});

v2Router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = itemsV2.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});


// Register versioned routes
app.use('/api/v1', v1Router); // Version 1 API
app.use('/api/v2', v2Router); // Version 2 API

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
