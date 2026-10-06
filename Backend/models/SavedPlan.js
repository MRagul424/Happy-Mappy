const mongoose = require("mongoose");

/* ============================================================
   COUNTER MODEL
   Used to generate readable IDs like:

   HM-SAVE-001
   HM-SAVE-002
   HM-SAVE-003
============================================================ */

const counterSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },

    seq: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

const Counter =
  mongoose.models.Counter ||
  mongoose.model("Counter", counterSchema);


/* ============================================================
   SAVED PLAN SCHEMA
============================================================ */

const savedPlanSchema = new mongoose.Schema(
  {
    /* --------------------------------------------------------
       READABLE SAVED PLAN ID

       Example:
       HM-SAVE-001
       HM-SAVE-002
    -------------------------------------------------------- */

    saveId: {
      type: String,
      unique: true,
      index: true,
      trim: true,
    },


    /* --------------------------------------------------------
       READABLE USER ID

       Example:
       HM-USER-001
       HM-USER-002

       IMPORTANT:
       This is used for saved-plan ownership.

       MongoDB document _id still exists automatically,
       but it is NOT used as the ownership reference.
    -------------------------------------------------------- */

    userId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },


    /* --------------------------------------------------------
       PLAN INFORMATION
    -------------------------------------------------------- */

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


    /* --------------------------------------------------------
       SAVED DATE
    -------------------------------------------------------- */

    savedAt: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);


/* ============================================================
   GENERATE READABLE SAVE ID

   Examples:

   1   -> HM-SAVE-001
   2   -> HM-SAVE-002
   10  -> HM-SAVE-010
   100 -> HM-SAVE-100

   IMPORTANT:
   Do NOT use next() here.
============================================================ */

savedPlanSchema.pre("save", async function () {

  /* ----------------------------------------------------------
     If saveId already exists,
     don't generate another one.
  ---------------------------------------------------------- */

  if (this.saveId) {
    return;
  }


  /* ----------------------------------------------------------
     Atomically increase saved-plan counter.
  ---------------------------------------------------------- */

  const counter = await Counter.findOneAndUpdate(
    {
      _id: "saveId",
    },

    {
      $inc: {
        seq: 1,
      },
    },

    {
      returnDocument: "after",
      upsert: true,
      setDefaultsOnInsert: true,
    }
  );


  /* ----------------------------------------------------------
     Convert number to 3 digits.
  ---------------------------------------------------------- */

  const number = String(
    counter.seq
  ).padStart(3, "0");


  /* ----------------------------------------------------------
     FINAL SAVE ID
  ---------------------------------------------------------- */

  this.saveId = `HM-SAVE-${number}`;
});


/* ============================================================
   PREVENT SAME USER FROM SAVING SAME PLAN TWICE

   Ownership is based on:

   userId + planKey

   Example:

   HM-USER-001 + plan-001
============================================================ */

savedPlanSchema.index(
  {
    userId: 1,
    planKey: 1,
  },
  {
    unique: true,
  }
);


/* ============================================================
   EXPORT MODEL
============================================================ */

module.exports =
  mongoose.models.SavedPlan ||
  mongoose.model(
    "SavedPlan",
    savedPlanSchema
  );