const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initializeDatabase } = require("./src/config/database");
const traineeRoutes = require("./src/routes/trainee");

// Initialize database
initializeDatabase();

// Create Express app instance
const app = express();
const PORT = process.env.PORT || 3000; // Set port from environment variable or default to 3000

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Register routes
app.use("/api/trainees", traineeRoutes); // Mount trainee routes at /api/trainees

// Root route - simple welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to STC EC6 Backend API" });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export both app and server
module.exports = { app, server };
