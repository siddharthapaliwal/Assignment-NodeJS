const fs = require('fs').promises; // Import the fs.promises API

// Function to read, process, and write content to a new file
async function readAndWriteFile(inputFilePath, outputFilePath) {
  try {
    // Read the contents of the input file
    const data = await fs.readFile(inputFilePath, 'utf8');
    console.log('File read successfully:', inputFilePath);

    // Process the data (in this case, convert it to uppercase)
    const processedData = data.toUpperCase();

    // Write the processed data to a new output file
    await fs.writeFile(outputFilePath, processedData);
    console.log('Processed data written successfully to:', outputFilePath);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

// Example usage
const inputFilePath = 'input.txt';  // Path to the input file (make sure this file exists)
const outputFilePath = 'output.txt'; // Path to the output file (this will be created)

// Call the function
readAndWriteFile(inputFilePath, outputFilePath);
