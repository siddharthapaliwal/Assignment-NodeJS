// Create a function that returns a promise resolving after 2 seconds
function wait() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise resolved after 2 seconds!');
    }, 2000);
  });
}

// Call the function and log the message when the promise resolves
wait().then(message => {
  console.log(message); // Output: Promise resolved after 2 seconds!
});
