const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // Readable Happy Mappy user ID
    // Example: HM-USER-001
    userId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },

    // MongoDB internal User ObjectId
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    planKey: {
      type: String,
      required: true,
    },

    planTitle: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      default: "",
    },

    tripDate: {
      type: Date,
      required: true,
    },

    people: {
      type: Number,
      required: true,
      min: 1,
    },

    pricePerPerson: {
      type: Number,
      required: true,
      min: 0,
    },

    subtotal: {
      type: Number,
      required: true,
    },

    discountRate: {
      type: Number,
      default: 0,
    },

    discountAmount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["upi", "netbanking", "card"],
      required: true,
    },

    // Safe payment detail for demo booking.
    // Card payments should contain only the last 4 digits.
    // Example: "•••• 1234"
    // UPI stores the UPI ID.
    // Net Banking stores the selected bank name/code.
    paymentDetail: {
      type: String,
      default: "",
      trim: true,
    },

    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    bookingStatus: {
      type: String,
      enum: ["saved", "confirmed", "cancelled"],
      default: "saved",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);