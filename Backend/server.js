/* ============================================
   HAPPY MAPPY - BACKEND SERVER
============================================ */

// ============================================
// DNS CONFIGURATION
// ============================================

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

// ============================================
// IMPORTS
// ============================================

const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const savedPlanRoutes = require("./routes/savedPlanRoutes");

// ============================================
// CONNECT MONGODB
// ============================================

connectDB();

// ============================================
// CREATE EXPRESS APP
// ============================================

const app = express();

// ============================================
// MIDDLEWARE
// ============================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Authentication routes
app.use("/api/auth", authRoutes);

// Booking routes
app.use("/api/bookings", bookingRoutes);

// Saved plan routes
app.use("/api/saved-plans", savedPlanRoutes);

// ============================================
// TEST ROUTE
// ============================================

app.get("/", (req, res) => {
  return res.status(200).json({
    message:
      "Happy Mappy Backend is running! 🚀",
  });
});

// ============================================
// 404 - ROUTE NOT FOUND
// ============================================

app.use((req, res) => {
  return res.status(404).json({
    message:
      "The requested API endpoint was not found",
  });
});

// ============================================
// GLOBAL ERROR HANDLER
// ============================================

app.use((error, req, res, next) => {
  console.error(
    "Global Server Error:",
    error.message
  );

  // ========================================
  // INVALID JSON BODY
  // ========================================

  if (
    error instanceof SyntaxError &&
    error.status === 400 &&
    error.type === "entity.parse.failed"
  ) {
    return res.status(400).json({
      message:
        "Invalid JSON request data",
    });
  }

  // ========================================
  // PAYLOAD TOO LARGE
  // ========================================

  if (
    error.type === "entity.too.large"
  ) {
    return res.status(413).json({
      message:
        "Request data is too large",
    });
  }

  // ========================================
  // CORS / GENERAL ERROR
  // ========================================

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).json({
    message:
      "Server error. Please try again later.",
  });
});

// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");

  console.log(
    "=========================================="
  );

  console.log(
    "       HAPPY MAPPY BACKEND SERVER"
  );

  console.log(
    "=========================================="
  );

  console.log("");

  console.log(
    `➜ Local: http://localhost:${PORT}/`
  );

  console.log(
    `➜ Auth: http://localhost:${PORT}/api/auth`
  );

  console.log(
    `➜ Bookings: http://localhost:${PORT}/api/bookings`
  );

  console.log(
    `➜ Saved Plans: http://localhost:${PORT}/api/saved-plans`
  );

  console.log("");

  console.log(
    "=========================================="
  );
});