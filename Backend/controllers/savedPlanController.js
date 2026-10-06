const SavedPlan = require("../models/SavedPlan");

// ============================================================
// SAVE PLAN
// ============================================================

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

    // --------------------------------------------------------
    // CHECK AUTHENTICATED USER
    // --------------------------------------------------------

    if (!req.userId) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // --------------------------------------------------------
    // REQUIRED FIELD VALIDATION
    // --------------------------------------------------------

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

    // --------------------------------------------------------
    // CONVERT VALUES
    // --------------------------------------------------------

    const planDays = Number(days);

    const planNights = Number(nights || 0);

    const planPrice = Number(price);

    // --------------------------------------------------------
    // VALIDATE VALUES
    // --------------------------------------------------------

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

    // --------------------------------------------------------
    // CREATE SAVED PLAN
    // --------------------------------------------------------

    const savedPlan = await SavedPlan.create({
      userId: String(req.userId).trim(),

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

    // --------------------------------------------------------
    // SUCCESS
    // --------------------------------------------------------

    return res.status(201).json({
      message: "Plan saved successfully",
      plan: savedPlan,
    });
  } catch (error) {
    console.error("Save Plan Error:", error);

    // --------------------------------------------------------
    // DUPLICATE KEY
    // --------------------------------------------------------

    if (error.code === 11000) {
      const duplicateFields = Object.keys(
        error.keyPattern || {}
      );

      if (
        duplicateFields.includes("userId") &&
        duplicateFields.includes("planKey")
      ) {
        return res.status(409).json({
          message:
            "This plan is already saved in My Plan",
          reason: "ALREADY_EXISTS",
        });
      }

      if (duplicateFields.includes("saveId")) {
        return res.status(500).json({
          message:
            "Unable to generate saved plan ID",
        });
      }

      return res.status(409).json({
        message:
          "This plan is already saved",
        reason: "ALREADY_EXISTS",
      });
    }

    return res.status(500).json({
      message: "Unable to save plan",
    });
  }
};


// ============================================================
// GET LOGGED-IN USER'S SAVED PLANS
// ============================================================

const getMySavedPlans = async (req, res) => {
  try {
    // --------------------------------------------------------
    // CHECK AUTHENTICATED USER
    // --------------------------------------------------------

    if (!req.userId) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // --------------------------------------------------------
    // GET ONLY THIS USER'S PLANS
    // --------------------------------------------------------

    const plans = await SavedPlan.find({
      userId: String(req.userId).trim(),
    }).sort({
      savedAt: -1,
    });

    return res.status(200).json({
      plans,
    });
  } catch (error) {
    console.error(
      "Get Saved Plans Error:",
      error
    );

    return res.status(500).json({
      message:
        "Unable to retrieve saved plans",
    });
  }
};


// ============================================================
// REMOVE SAVED PLAN
// ============================================================

const removeSavedPlan = async (req, res) => {
  try {
    const { id } = req.params;

    // --------------------------------------------------------
    // CHECK AUTHENTICATED USER
    // --------------------------------------------------------

    if (!req.userId) {
      return res.status(401).json({
        message:
          "Authentication required",
      });
    }

    // --------------------------------------------------------
    // CHECK ID
    // --------------------------------------------------------

    if (!id || !String(id).trim()) {
      return res.status(400).json({
        message:
          "Saved plan ID is required",
      });
    }

    const userId = String(
      req.userId
    ).trim();

    const requestedId = String(
      id
    ).trim();

    let deletedPlan = null;

    // ========================================================
    // 1. TRY HM-SAVE-001
    // ========================================================

    deletedPlan =
      await SavedPlan.findOneAndDelete({
        saveId: requestedId,
        userId,
      });

    // ========================================================
    // 2. TRY MONGODB _id
    // ========================================================

    if (
      !deletedPlan &&
      /^[0-9a-fA-F]{24}$/.test(
        requestedId
      )
    ) {
      deletedPlan =
        await SavedPlan.findOneAndDelete({
          _id: requestedId,
          userId,
        });
    }

    // ========================================================
    // 3. TRY planKey
    //
    // This is important for older saved plans
    // or frontend objects that don't contain
    // saveId / _id.
    // ========================================================

    if (!deletedPlan) {
      deletedPlan =
        await SavedPlan.findOneAndDelete({
          planKey: requestedId,
          userId,
        });
    }

    // ========================================================
    // 4. TRY planId
    //
    // Extra compatibility for existing saved plans.
    // Ownership is STILL checked with userId.
    // ========================================================

    if (!deletedPlan) {
      deletedPlan =
        await SavedPlan.findOneAndDelete({
          planId: requestedId,
          userId,
        });
    }

    // ========================================================
    // NOT FOUND
    // ========================================================

    if (!deletedPlan) {
      return res.status(404).json({
        message:
          "Saved plan not found",
      });
    }

    // ========================================================
    // SUCCESS
    // ========================================================

    return res.status(200).json({
      message:
        "Plan removed successfully",

      plan: deletedPlan,
    });
  } catch (error) {
    console.error(
      "Remove Saved Plan Error:",
      error
    );

    return res.status(500).json({
      message:
        "Unable to remove saved plan",
    });
  }
};


// ============================================================
// EXPORT
// ============================================================

module.exports = {
  savePlan,
  getMySavedPlans,
  removeSavedPlan,
};