// Importing necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data to mimic a database
let users = [
  { id: 1, name: 'Siddharth Paliwal', email: 'sid.paliwal1989@gmail.com' },
  { id: 2, name: 'Rakesh Sharma', email: 'rakesh@gmail.com' },
];

// Detailed Request Handler

// 1. GET request - Fetch all users
app.get('/api/users', (req, res) => {
  console.log('GET /api/users - Request received');
  // Respond with all users
  res.status(200).json({
    success: true,
    message: 'Users fetched successfully.',
    data: users,
  });
});

// 2. GET request - Fetch a user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(`GET /api/users/${userId} - Request received`);

  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json({
      success: true,
      message: 'User fetched successfully.',
      data: user,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found.`,
    });
  }
});

// 3. POST request - Add a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  console.log('POST /api/users - Request received', req.body);

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and Email are required.',
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json({
    success: true,
    message: 'User created successfully.',
    data: newUser,
  });
});

// 4. PUT request - Update user information
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  console.log(`PUT /api/users/${userId} - Request received`, req.body);

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const updatedUser = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
    };

    users[userIndex] = updatedUser;
    res.status(200).json({
      success: true,
      message: 'User updated successfully.',
      data: updatedUser,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found.`,
    });
  }
});

// 5. DELETE request - Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(`DELETE /api/users/${userId} - Request received`);

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
      data: deletedUser,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found.`,
    });
  }
});

// Handling 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.',
  });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
