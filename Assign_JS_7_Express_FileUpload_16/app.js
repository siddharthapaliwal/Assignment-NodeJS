// Import the required modules
const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the folder where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate a unique filename based on the current timestamp and original file name
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1632425167123.jpg
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware to serve static files (uploads directory)
app.use(express.static('uploads'));

// Set up a simple route to serve the file upload form
app.get('/', (req, res) => {
  res.send(`
    <h1>Upload File</h1>
    <form ref='uploadForm' 
      id='uploadForm' 
      action='/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="file" />
        <input type='submit' value='Upload!' />
    </form>
  `);
});

// Route to handle the file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`
    <h1>File uploaded successfully</h1>
    <p>File Name: ${req.file.filename}</p>
    <p>File Path: /uploads/${req.file.filename}</p>
    <p><a href="/">Upload another file</a></p>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
