
/* ============================================
   HAPPY MAPPY - BACKEND SERVER
============================================ */

// DNS Configuration
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Connect MongoDB
connectDB();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Authentication routes
app.use("/api/auth", authRoutes);

// Booking routes
app.use("/api/bookings", bookingRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Happy Mappy Backend is running! 🚀",
  });
});

// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("==========================================");
  console.log("       HAPPY MAPPY BACKEND SERVER");
  console.log("==========================================");
  console.log("");
  console.log(`➜ Local: http://localhost:${PORT}/`);
  console.log(`➜ Auth: http://localhost:${PORT}/api/auth`);
  console.log(`➜ Bookings: http://localhost:${PORT}/api/bookings`);
  console.log("");
  console.log("==========================================");
});