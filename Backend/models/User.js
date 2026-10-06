const mongoose = require("mongoose");

// ============================================================
// COUNTER MODEL
// Used to generate readable IDs like:
// HM-USER-001
// HM-USER-002
// HM-USER-003
// ============================================================

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


// ============================================================
// USER SCHEMA
// ============================================================

const userSchema = new mongoose.Schema(
  {
    // ----------------------------------------------------------
    // PROFESSIONAL READABLE USER ID
    //
    // Example:
    // HM-USER-001
    // HM-USER-002
    //
    // sparse: true is important because your existing users
    // currently do not have userId.
    // ----------------------------------------------------------

    userId: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
      trim: true,
    },


    // ----------------------------------------------------------
    // USER NAME
    // ----------------------------------------------------------

    name: {
      type: String,
      required: true,
      trim: true,
    },


    // ----------------------------------------------------------
    // USER EMAIL
    // ----------------------------------------------------------

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },


    // ----------------------------------------------------------
    // USER CONTACT
    // ----------------------------------------------------------

    contact: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 10,
    },


    // ----------------------------------------------------------
    // PASSWORD
    // Password is stored as a bcrypt hash by authController.js
    // ----------------------------------------------------------

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },

  {
    timestamps: true,
  }
);


// ============================================================
// GENERATE USER ID
//
// Mongoose 9 compatible async middleware.
//
// IMPORTANT:
// Do NOT use next() here.
// ============================================================

userSchema.pre("save", async function () {

  // ----------------------------------------------------------
  // If this user already has a readable ID,
  // don't generate another one.
  // ----------------------------------------------------------

  if (this.userId) {
    return;
  }


  // ----------------------------------------------------------
  // Atomically increase the user counter.
  // ----------------------------------------------------------

  const counter = await Counter.findOneAndUpdate(
    {
      _id: "userId",
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


  // ----------------------------------------------------------
  // Convert number into 3 digits.
  //
  // 1   -> 001
  // 2   -> 002
  // 10  -> 010
  // 100 -> 100
  // ----------------------------------------------------------

  const number = String(counter.seq).padStart(3, "0");


  // ----------------------------------------------------------
  // Final readable user ID.
  //
  // Example:
  // HM-USER-001
  // ----------------------------------------------------------

  this.userId = `HM-USER-${number}`;
});


// ============================================================
// EXPORT
// ============================================================

module.exports =
  mongoose.models.User ||
  mongoose.model("User", userSchema);