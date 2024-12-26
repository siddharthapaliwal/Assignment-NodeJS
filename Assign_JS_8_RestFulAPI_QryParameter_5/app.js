const express = require('express');
const app = express();
const port = 3000;

// Sample items data
const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Strawberry', category: 'Fruit' },
];

// GET /api/items route with optional search query parameter
app.get('/api/items', (req, res) => {
  const searchQuery = req.query.search?.toLowerCase() || ''; // Optional search query (case-insensitive)

  // Filter items based on search query
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery)
  );

  // If no items match the search query
  if (filteredItems.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'No items found matching the search criteria.',
    });
  }

  // Respond with the filtered items
  res.status(200).json({
    success: true,
    message: 'Items retrieved successfully.',
    data: filteredItems,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
