const Booking = require("../models/Booking");

// ============================================
// CREATE CONFIRMED DEMO BOOKING
// ============================================

const createBooking = async (req, res) => {
  try {
    const {
      planKey,
      planTitle,
      destination,
      tripDate,
      people,
      pricePerPerson,
      paymentMethod,
    } = req.body;

    if (
      !planKey ||
      !planTitle ||
      !tripDate ||
      !paymentMethod ||
      people === undefined ||
      pricePerPerson === undefined
    ) {
      return res.status(400).json({
        message: "Please provide all required booking details",
      });
    }

    const travelers = Number(people);
    const price = Number(pricePerPerson);
    const date = new Date(tripDate);

    if (
      !Number.isInteger(travelers) ||
      travelers < 1 ||
      !Number.isFinite(price) ||
      price < 0 ||
      Number.isNaN(date.getTime())
    ) {
      return res.status(400).json({
        message: "Invalid trip date, traveler count, or price",
      });
    }

    const allowedMethods = ["upi", "netbanking", "card"];

    if (!allowedMethods.includes(paymentMethod)) {
      return res.status(400).json({
        message: "Invalid payment method",
      });
    }

    // Calculate pricing on the backend.
    const subtotal = price * travelers;

    let discountRate = 0;

    if (travelers >= 11) {
      discountRate = 15;
    } else if (travelers >= 8) {
      discountRate = 10;
    } else if (travelers >= 5) {
      discountRate = 5;
    }

    const discountAmount = Number(
      ((subtotal * discountRate) / 100).toFixed(2)
    );

    const totalAmount = Number(
      (subtotal - discountAmount).toFixed(2)
    );

    const bookingReference =
      `HM-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const booking = await Booking.create({
      user: req.userId,
      planKey: String(planKey),
      planTitle: String(planTitle),
      destination: destination || "",
      tripDate: date,
      people: travelers,
      pricePerPerson: price,
      subtotal,
      discountRate,
      discountAmount,
      totalAmount,
      paymentMethod,
      bookingReference,

      // This is a demo confirmation, not verified real payment.
      paymentStatus: "pending",
      bookingStatus: "confirmed",
    });

    return res.status(201).json({
      message: "Demo booking confirmed",
      booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error.message);

    return res.status(500).json({
      message: "Unable to create booking",
    });
  }
};

// ============================================
// GET BOOKINGS FOR LOGGED-IN USER
// ============================================

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({ bookings });
  } catch (error) {
    console.error("Get Bookings Error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve bookings",
    });
  }
};

// ============================================
// GET ONE BOOKING
// ============================================

const getBookingByReference = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      bookingReference: req.params.reference,
      user: req.userId,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json({ booking });
  } catch (error) {
    console.error("Get Booking Error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve booking",
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookingByReference,
};