// Function to attempt parsing a JSON string
function parseJSON(jsonString) {
  try {
    // Attempt to parse the JSON string
    const parsedData = JSON.parse(jsonString);
    console.log("Parsed Data:", parsedData);
  } catch (error) {
    // Handle any errors that occur during parsing
    console.error("Error parsing JSON:", error.message);
  }
}

// Test with valid and invalid JSON strings
const validJson = '{"name": "Siddharth", "age": 34}';
const invalidJson = '{"name": "Siddharth", "age": 34';  // Missing closing brace

// Calling the function with valid JSON
parseJSON(validJson);  // Should log parsed data

// Calling the function with invalid JSON
parseJSON(invalidJson);  // Should log an error message
