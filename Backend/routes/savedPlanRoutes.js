const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  savePlan,
  getMySavedPlans,
  removeSavedPlan,
} = require("../controllers/savedPlanController");

const router = express.Router();

// All saved-plan routes require a valid JWT.
router.use(authMiddleware);

// Save a plan
router.post("/", savePlan);

// Get saved plans for logged-in user
router.get("/", getMySavedPlans);

// Remove a saved plan
router.delete("/:id", removeSavedPlan);

module.exports = router;