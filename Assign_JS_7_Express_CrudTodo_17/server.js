const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like HTML, CSS

// Read To-Do items from JSON file
const getTodos = () => {
  try {
    const data = fs.readFileSync('todos.json');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Write To-Do items to JSON file
const saveTodos = (todos) => {
  fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
};

// Get all To-Do items
app.get('/todos', (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// Add a new To-Do item
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: 'Task is required' });
  }

  const todos = getTodos();
  const newTodo = { id: Date.now(), task, completed: false };
  todos.push(newTodo);
  saveTodos(todos);

  res.status(201).json(newTodo);
});

// Delete a To-Do item by ID
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todos = getTodos();
  const updatedTodos = todos.filter(todo => todo.id !== parseInt(id));

  if (updatedTodos.length === todos.length) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  saveTodos(updatedTodos);
  res.status(200).json({ message: 'Todo deleted successfully' });
});

// Mark a To-Do item as completed
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todos = getTodos();
  const todo = todos.find(todo => todo.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.completed = !todo.completed;
  saveTodos(todos);

  res.json(todo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
