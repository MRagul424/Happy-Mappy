const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ============================================
// REGISTER USER
// ============================================

const registerUser = async (req, res) => {
  try {
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

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanContact = contact.trim();

    // ========================================
    // NAME VALIDATION
    // ========================================

    if (!cleanName) {
      return res.status(400).json({
        message: "Please provide your full name",
      });
    }

    // ========================================
    // CONTACT VALIDATION
    // ========================================

    if (
      !/^\d{10}$/.test(cleanContact)
    ) {
      return res.status(400).json({
        message:
          "Please provide a valid 10-digit contact number",
      });
    }

    // ========================================
    // PASSWORD VALIDATION
    // ========================================

    if (password.length < 6) {
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
    // ========================================

    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      contact: cleanContact,
      password: hashedPassword,
    });

    // ========================================
    // CREATE JWT
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
    // ========================================

    res.status(201).json({
      message:
        "User registered successfully",
      token,
      user: {
        id: user._id,
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
    // DUPLICATE EMAIL SAFETY
    // ========================================

    if (error.code === 11000) {
      return res.status(409).json({
        message:
          "An account with this email already exists",
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};

// ============================================
// LOGIN USER
// ============================================

const loginUser = async (req, res) => {
  try {
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
      email.trim().toLowerCase();

    // ========================================
    // FIND USER
    // ========================================

    const user =
      await User.findOne({
        email: cleanEmail,
      });

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
    // CREATE JWT
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
    // ========================================

    res.status(200).json({
      message:
        "Login successful",
      token,
      user: {
        id: user._id,
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

    res.status(500).json({
      message: "Server error",
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