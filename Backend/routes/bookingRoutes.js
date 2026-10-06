const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createBooking,
  getMyBookings,
  getBookingByReference,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// All booking routes require a valid JWT.
router.use(authMiddleware);

router.post("/", createBooking);

router.get("/", getMyBookings);

router.get("/:reference", getBookingByReference);

router.delete("/:reference", deleteBooking);

module.exports = router;
