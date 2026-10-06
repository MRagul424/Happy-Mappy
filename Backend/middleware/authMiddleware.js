const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ============================================================
// AUTHENTICATION MIDDLEWARE
//
// JWT may contain the MongoDB User _id.
//
// We convert that internal MongoDB _id into the readable:
//
// HM-USER-001
// HM-USER-002
// HM-USER-003
//
// Then:
// req.userId       = readable userId
// req.mongoUserId  = MongoDB _id
//
// SavedPlan will use req.userId.
// MongoDB _id is still available internally.
// ============================================================

const authMiddleware = async (req, res, next) => {
  try {
    // ----------------------------------------------------------
    // GET AUTHORIZATION HEADER
    // ----------------------------------------------------------

    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // ----------------------------------------------------------
    // GET TOKEN
    // ----------------------------------------------------------

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // ----------------------------------------------------------
    // VERIFY JWT
    // ----------------------------------------------------------

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // ----------------------------------------------------------
    // JWT MUST CONTAIN userId
    //
    // Existing JWT uses the MongoDB User _id.
    // We keep that behaviour.
    // ----------------------------------------------------------

    if (!decoded.userId) {
      return res.status(401).json({
        message: "Invalid authentication token",
      });
    }

    // ----------------------------------------------------------
    // FIND USER USING MONGODB _id
    // ----------------------------------------------------------

    const user = await User.findById(
      decoded.userId
    ).select(
      "_id userId"
    );

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // ----------------------------------------------------------
    // USER MUST HAVE READABLE USER ID
    // ----------------------------------------------------------

    if (!user.userId) {
      return res.status(401).json({
        message:
          "User ID is not available. Please contact support.",
      });
    }

    // ----------------------------------------------------------
    // STORE BOTH IDs
    //
    // req.userId       -> readable ID
    //                   HM-USER-001
    //
    // req.mongoUserId  -> MongoDB ObjectId
    //                   used internally when needed
    // ----------------------------------------------------------

    req.userId = user.userId;

    req.mongoUserId = user._id;

    // ----------------------------------------------------------
    // CONTINUE
    // ----------------------------------------------------------

    next();

  } catch (error) {
    console.error(
      "Authentication Error:",
      error.message
    );

    return res.status(401).json({
      message:
        "Invalid or expired authentication token",
    });
  }
};

module.exports = authMiddleware;