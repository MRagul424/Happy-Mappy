const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ============================================
// REGISTER USER
// ============================================

const registerUser = async (req, res) => {
  try {
    // ========================================
    // CHECK REQUEST BODY
    // ========================================

    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        message: "Invalid request data",
      });
    }

    const {
      name,
      email,
      contact,
      password,
    } = req.body;

    // ========================================
    // REQUIRED FIELDS
    // ========================================

    if (
      !name ||
      !email ||
      !contact ||
      !password
    ) {
      return res.status(400).json({
        message:
          "Please provide name, email, contact number and password",
      });
    }

    // ========================================
    // CLEAN VALUES
    // ========================================

    const cleanName =
      typeof name === "string"
        ? name.trim()
        : "";

    const cleanEmail =
      typeof email === "string"
        ? email.trim().toLowerCase()
        : "";

    const cleanContact =
      typeof contact === "string"
        ? contact.trim()
        : "";

    // ========================================
    // NAME VALIDATION
    // ========================================

    if (!cleanName) {
      return res.status(400).json({
        message: "Please provide your full name",
      });
    }

    // ========================================
    // EMAIL VALIDATION
    // ========================================

    if (!cleanEmail) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    // ========================================
    // CONTACT VALIDATION
    // ========================================

    if (!/^\d{10}$/.test(cleanContact)) {
      return res.status(400).json({
        message:
          "Please provide a valid 10-digit contact number",
      });
    }

    // ========================================
    // PASSWORD VALIDATION
    // ========================================

    if (
      typeof password !== "string" ||
      password.length < 6
    ) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters",
      });
    }

    // ========================================
    // CHECK EXISTING USER
    // ========================================

    const existingUser =
      await User.findOne({
        email: cleanEmail,
      });

    if (existingUser) {
      return res.status(409).json({
        message:
          "An account with this email already exists",
      });
    }

    // ========================================
    // HASH PASSWORD
    // ========================================

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // ========================================
    // CREATE USER
    //
    // User.js automatically generates:
    //
    // HM-USER-001
    // HM-USER-002
    // HM-USER-003
    //
    // through the pre-save middleware.
    // ========================================

    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      contact: cleanContact,
      password: hashedPassword,
    });

    // ========================================
    // CHECK JWT CONFIGURATION
    // ========================================

    if (!process.env.JWT_SECRET) {
      console.error(
        "JWT_SECRET is missing from environment variables"
      );

      return res.status(500).json({
        message:
          "Server configuration error. Please try again later.",
      });
    }

    // ========================================
    // CREATE JWT
    //
    // IMPORTANT:
    // Keep MongoDB _id inside the JWT.
    //
    // Existing authentication middleware uses
    // this value to identify the user.
    // ========================================

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // ========================================
    // RESPONSE
    //
    // userId is the readable ID:
    // HM-USER-001
    //
    // id remains MongoDB ObjectId.
    // ========================================

    return res.status(201).json({
      message:
        "User registered successfully",

      token,

      user: {
        id: user._id,
        userId: user.userId,
        name: user.name,
        email: user.email,
        contact: user.contact,
      },
    });

  } catch (error) {
    console.error(
      "Register Error:",
      error.message
    );

    // ========================================
    // DUPLICATE KEY SAFETY
    // ========================================

    if (error.code === 11000) {

      // --------------------------------------
      // Duplicate email
      // --------------------------------------

      if (error.keyPattern?.email) {
        return res.status(409).json({
          message:
            "An account with this email already exists",
        });
      }

      // --------------------------------------
      // Duplicate readable user ID
      // --------------------------------------

      if (error.keyPattern?.userId) {
        return res.status(409).json({
          message:
            "Unable to generate a unique user ID. Please try again.",
        });
      }

      return res.status(409).json({
        message:
          "Account details already exist",
      });
    }

    // ========================================
    // MONGOOSE VALIDATION ERROR
    // ========================================

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message:
          "Please provide valid account details",
      });
    }

    // ========================================
    // MONGODB / DATABASE ERROR
    // ========================================

    if (
      error.name === "MongoServerError" ||
      error.name === "MongoNetworkError" ||
      error.name === "MongooseError"
    ) {
      return res.status(503).json({
        message:
          "Database service is temporarily unavailable. Please try again later.",
      });
    }

    // ========================================
    // JWT ERROR
    // ========================================

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenError"
    ) {
      return res.status(500).json({
        message:
          "Authentication service is temporarily unavailable. Please try again later.",
      });
    }

    // ========================================
    // GENERAL SERVER ERROR
    // ========================================

    return res.status(500).json({
      message:
        "Server error. Please try again later.",
    });
  }
};


// ============================================
// LOGIN USER
// ============================================

const loginUser = async (req, res) => {
  try {
    // ========================================
    // CHECK REQUEST BODY
    // ========================================

    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        message: "Invalid request data",
      });
    }

    const {
      email,
      password,
    } = req.body;

    // ========================================
    // REQUIRED FIELDS
    // ========================================

    if (!email || !password) {
      return res.status(400).json({
        message:
          "Please provide email and password",
      });
    }

    // ========================================
    // CLEAN EMAIL
    // ========================================

    const cleanEmail =
      typeof email === "string"
        ? email.trim().toLowerCase()
        : "";

    if (!cleanEmail) {
      return res.status(400).json({
        message:
          "Please provide a valid email address",
      });
    }

    // ========================================
    // FIND USER
    // ========================================

    const user =
      await User.findOne({
        email: cleanEmail,
      });

    // ========================================
    // USER NOT FOUND
    // ========================================

    if (!user) {
      return res.status(401).json({
        message:
          "Invalid email or password",
      });
    }

    // ========================================
    // COMPARE PASSWORD
    // ========================================

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message:
          "Invalid email or password",
      });
    }

    // ========================================
    // CHECK JWT CONFIGURATION
    // ========================================

    if (!process.env.JWT_SECRET) {
      console.error(
        "JWT_SECRET is missing from environment variables"
      );

      return res.status(500).json({
        message:
          "Server configuration error. Please try again later.",
      });
    }

    // ========================================
    // CREATE JWT
    //
    // IMPORTANT:
    // Keep MongoDB _id here so existing
    // authentication middleware continues
    // working correctly.
    // ========================================

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // ========================================
    // RESPONSE
    //
    // Include both:
    //
    // id     → MongoDB ObjectId
    // userId → HM-USER-xxx
    //
    // ========================================

    return res.status(200).json({
      message:
        "Login successful",

      token,

      user: {
        id: user._id,
        userId: user.userId,
        name: user.name,
        email: user.email,
        contact:
          user.contact || "",
      },
    });

  } catch (error) {
    console.error(
      "Login Error:",
      error.message
    );

    // ========================================
    // MONGODB / DATABASE ERROR
    // ========================================

    if (
      error.name === "MongoServerError" ||
      error.name === "MongoNetworkError" ||
      error.name === "MongooseError"
    ) {
      return res.status(503).json({
        message:
          "Database service is temporarily unavailable. Please try again later.",
      });
    }

    // ========================================
    // JWT ERROR
    // ========================================

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenError"
    ) {
      return res.status(500).json({
        message:
          "Authentication service is temporarily unavailable. Please try again later.",
      });
    }

    // ========================================
    // GENERAL SERVER ERROR
    // ========================================

    return res.status(500).json({
      message:
        "Server error. Please try again later.",
    });
  }
};


// ============================================
// EXPORT
// ============================================

module.exports = {
  registerUser,
  loginUser,
};