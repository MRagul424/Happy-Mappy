const SavedPlan = require("../models/SavedPlan");

// ============================================
// SAVE PLAN FOR LOGGED-IN USER
// ============================================

const savePlan = async (req, res) => {
  try {
    const {
      planKey,
      planId,
      title,
      destination,
      days,
      nights,
      category,
      price,
      image,
    } = req.body;

    if (
      !planKey ||
      planId === undefined ||
      !title ||
      days === undefined ||
      price === undefined
    ) {
      return res.status(400).json({
        message: "Please provide all required plan details",
      });
    }

    const planDays = Number(days);
    const planNights = Number(nights || 0);
    const planPrice = Number(price);

    if (
      !Number.isInteger(planDays) ||
      planDays < 1 ||
      !Number.isInteger(planNights) ||
      planNights < 0 ||
      !Number.isFinite(planPrice) ||
      planPrice < 0
    ) {
      return res.status(400).json({
        message: "Invalid plan details",
      });
    }

    const savedPlan = await SavedPlan.create({
      user: req.userId,
      planKey: String(planKey).trim(),
      planId: String(planId).trim(),
      title: String(title).trim(),
      destination: String(destination || "").trim(),
      days: planDays,
      nights: planNights,
      category: String(category || "").trim(),
      price: planPrice,
      image: String(image || "").trim(),
    });

    return res.status(201).json({
      message: "Plan saved successfully",
      plan: savedPlan,
    });
  } catch (error) {
    console.error("Save Plan Error:", error.message);

    // Duplicate user + planKey
    if (error.code === 11000) {
      return res.status(409).json({
        message: "This plan is already saved in My Plan",
        reason: "ALREADY_EXISTS",
      });
    }

    return res.status(500).json({
      message: "Unable to save plan",
    });
  }
};

// ============================================
// GET SAVED PLANS FOR LOGGED-IN USER
// ============================================

const getMySavedPlans = async (req, res) => {
  try {
    const plans = await SavedPlan.find({
      user: req.userId,
    }).sort({ savedAt: -1 });

    return res.status(200).json({
      plans,
    });
  } catch (error) {
    console.error("Get Saved Plans Error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve saved plans",
    });
  }
};

// ============================================
// REMOVE SAVED PLAN
// ============================================

const removeSavedPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPlan = await SavedPlan.findOneAndDelete({
      _id: id,
      user: req.userId,
    });

    if (!deletedPlan) {
      return res.status(404).json({
        message: "Saved plan not found",
      });
    }

    return res.status(200).json({
      message: "Plan removed successfully",
      plan: deletedPlan,
    });
  } catch (error) {
    console.error("Remove Saved Plan Error:", error.message);

    return res.status(500).json({
      message: "Unable to remove saved plan",
    });
  }
};

module.exports = {
  savePlan,
  getMySavedPlans,
  removeSavedPlan,
};