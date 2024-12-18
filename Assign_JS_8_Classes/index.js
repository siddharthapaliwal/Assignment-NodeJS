// Define a class Rectangle with a constructor for width and height
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  calculateArea() {
    return this.width * this.height;
  }
}

// Create an instance of Rectangle
const myRectangle = new Rectangle(5, 10);

// Log the area of the rectangle
console.log(`Area of Rectangle: ${myRectangle.calculateArea()}`); // Output: Area of Rectangle: 50
