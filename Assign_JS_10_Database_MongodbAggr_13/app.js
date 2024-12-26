const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Connect to MongoDB (Replace this URL with your actual connection string if needed)
mongoose.connect('mongodb://0.0.0.0:27017/aggregationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Check connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB', err);
});

// Define a simple schema for the "orders" collection
const orderSchema = new mongoose.Schema({
  customerId: String,
  amount: Number,
  date: Date,
  status: String
});

// Create a model for the "orders" collection
const Order = mongoose.model('Order', orderSchema);

// Add some example data (This is optional and can be done manually via MongoDB shell or MongoDB Compass)
const seedData = async () => {
  await Order.create([
    { customerId: 'C001', amount: 100, date: new Date('2023-01-01'), status: 'completed' },
    { customerId: 'C002', amount: 150, date: new Date('2023-01-02'), status: 'pending' },
    { customerId: 'C001', amount: 200, date: new Date('2023-02-01'), status: 'completed' },
    { customerId: 'C003', amount: 50, date: new Date('2023-02-05'), status: 'completed' },
    { customerId: 'C001', amount: 75, date: new Date('2023-03-01'), status: 'pending' },
    { customerId: 'C002', amount: 130, date: new Date('2023-03-10'), status: 'completed' },
  ]);
};

// Seed the database (Only run this once to populate the data)
seedData().catch(err => console.log(err));

// Aggregation Route Example: Group orders by status and calculate total amount
app.get('/orders/aggregation', async (req, res) => {
  try {
    const aggregationResults = await Order.aggregate([
      {
        $group: {
          _id: "$status",                // Group by 'status'
          totalAmount: { $sum: "$amount" }, // Calculate the total amount for each status
          count: { $sum: 1 }              // Count the number of orders for each status
        }
      },
      {
        $sort: { totalAmount: -1 }         // Sort by totalAmount in descending order
      }
    ]);
    
    res.json(aggregationResults);
  } catch (err) {
    res.status(500).json({ message: "Error performing aggregation", error: err });
  }
});

// Aggregation Route Example: Find the total sales by month
app.get('/orders/monthly-sales', async (req, res) => {
  try {
    const monthlySales = await Order.aggregate([
      {
        $project: {
          month: { $month: "$date" },    // Extract the month from the date
          year: { $year: "$date" },      // Extract the year from the date
          amount: 1                      // Include the amount field
        }
      },
      {
        $group: {
          _id: { year: "$year", month: "$month" }, // Group by year and month
          totalSales: { $sum: "$amount" }           // Sum the amount for each month
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month
      }
    ]);

    res.json(monthlySales);
  } catch (err) {
    res.status(500).json({ message: "Error performing aggregation", error: err });
  }
});

// Aggregation Route Example: Find the top 3 customers by total spending
app.get('/orders/top-customers', async (req, res) => {
  try {
    const topCustomers = await Order.aggregate([
      {
        $group: {
          _id: "$customerId",               // Group by customerId
          totalSpent: { $sum: "$amount" }    // Calculate the total amount spent by each customer
        }
      },
      {
        $sort: { totalSpent: -1 }            // Sort by totalSpent in descending order
      },
      {
        $limit: 3                           // Limit the result to top 3 customers
      }
    ]);

    res.json(topCustomers);
  } catch (err) {
    res.status(500).json({ message: "Error performing aggregation", error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
