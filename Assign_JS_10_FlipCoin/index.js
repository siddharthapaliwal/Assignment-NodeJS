// Program: Coin Flip Simulation
// Using Math.random()
// javascript
// Simulate a coin flip by generating a random number (0 or 1)
const coinFlip = Math.random() < 0.5 ? 0 : 1;

// Determine the result based on the random number
if (coinFlip === 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// Run the Program:
// node