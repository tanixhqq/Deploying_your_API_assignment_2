// Load environment variables
require('dotenv').config();

// Import Express
const express = require('express');

// Initialize the app
const app = express();

// Define the root route
app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';

  // Return data based on the environment variable
  if (isAdmin) {
    res.send({
      message: "Welcome, Admin!",
      data: ["Admin Data 1", "Admin Data 2", "Admin Data 3"],
    });
  } else {
    res.send({
      message: "Welcome, User!",
      data: ["User Data 1", "User Data 2"],
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
