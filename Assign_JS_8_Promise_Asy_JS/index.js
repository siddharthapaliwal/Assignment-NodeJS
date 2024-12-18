// Function to simulate asynchronous operation using setTimeout
function simulateAsyncOperation(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolve the promise after the specified delay
            resolve('Operation completed!');
        }, delay);
    });
}

// Calling the function with a 2-second delay (2000 milliseconds)
simulateAsyncOperation(2000)
    .then(message => {
        // Log the resolved message to the console
        console.log(message);
    })
    .catch(error => {
        // Log any error if it occurs
        console.log('Error:', error);
    });