const mongoose = require("mongoose");

const savedPlanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    planKey: {
      type: String,
      required: true,
      trim: true,
    },

    planId: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      default: "",
      trim: true,
    },

    days: {
      type: Number,
      required: true,
      min: 1,
    },

    nights: {
      type: Number,
      default: 0,
      min: 0,
    },

    category: {
      type: String,
      default: "",
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    image: {
      type: String,
      default: "",
      trim: true,
    },

    savedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// A user should not be able to save the same plan more than once.
savedPlanSchema.index(
  { user: 1, planKey: 1 },
  { unique: true }
);

module.exports = mongoose.model("SavedPlan", savedPlanSchema);