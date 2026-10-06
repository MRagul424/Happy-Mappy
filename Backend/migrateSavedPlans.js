// ============================================================
// HAPPY MAPPY - MIGRATE SAVED PLANS TO READABLE USER ID
// ============================================================

require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");

async function migrate() {
  try {
    console.log("\n==============================================");
    console.log(" HAPPY MAPPY - DATABASE MIGRATION");
    console.log("==============================================\n");

    // --------------------------------------------------------
    // Use the SAME MongoDB connection used by server.js
    // --------------------------------------------------------
    await connectDB();

    const db = mongoose.connection.db;

    const usersCollection = db.collection("users");
    const savedPlansCollection = db.collection("savedplans");
    const countersCollection = db.collection("counters");

    // ========================================================
    // STEP 1 - BACKFILL MISSING USER IDs
    // ========================================================

    console.log("\n🔹 STEP 1: Checking users...\n");

    const users = await usersCollection
      .find({})
      .sort({ _id: 1 })
      .toArray();

    console.log(`Found ${users.length} users.`);

    let usersUpdated = 0;

    // --------------------------------------------------------
    // Find highest existing HM-USER number
    // --------------------------------------------------------

    let highestUserNumber = 0;

    for (const user of users) {
      if (user.userId && typeof user.userId === "string") {
        const match = user.userId.match(/^HM-USER-(\d+)$/);

        if (match) {
          const number = parseInt(match[1], 10);

          if (number > highestUserNumber) {
            highestUserNumber = number;
          }
        }
      }
    }

    // --------------------------------------------------------
    // Make sure counter is at least the highest existing ID
    // --------------------------------------------------------

    await countersCollection.updateOne(
      { _id: "userId" },
      {
        $max: {
          seq: highestUserNumber,
        },
      },
      {
        upsert: true,
      }
    );

    // --------------------------------------------------------
    // Generate IDs for users without userId
    // --------------------------------------------------------

    for (const user of users) {
      if (user.userId) {
        continue;
      }

      const counterResult = await countersCollection.findOneAndUpdate(
        { _id: "userId" },
        {
          $inc: {
            seq: 1,
          },
        },
        {
          upsert: true,
          returnDocument: "after",
        }
      );

      const seq =
        counterResult.value?.seq ??
        counterResult.seq;

      const newUserId = `HM-USER-${String(seq).padStart(3, "0")}`;

      await usersCollection.updateOne(
        {
          _id: user._id,
        },
        {
          $set: {
            userId: newUserId,
          },
        }
      );

      console.log(
        `   ✅ ${user.email || user._id} → ${newUserId}`
      );

      usersUpdated++;
    }

    console.log(`\nUsers updated: ${usersUpdated}`);

    // ========================================================
    // STEP 2 - MIGRATE SAVED PLANS
    // ========================================================

    console.log("\n🔹 STEP 2: Migrating Saved Plans...\n");

    const savedPlans = await savedPlansCollection
      .find({})
      .toArray();

    console.log(`Found ${savedPlans.length} saved plans.`);

    let plansUpdated = 0;
    let plansSkipped = 0;
    let plansFailed = 0;

    for (const savedPlan of savedPlans) {

      // ------------------------------------------------------
      // Already migrated
      // ------------------------------------------------------

      if (savedPlan.userId) {
        console.log(
          `   ⏭️ ${savedPlan.saveId || savedPlan._id} already migrated`
        );

        plansSkipped++;
        continue;
      }

      // ------------------------------------------------------
      // Old user field missing
      // ------------------------------------------------------

      if (!savedPlan.user) {
        console.log(
          `   ⚠️ Skipping ${
            savedPlan.saveId || savedPlan._id
          } - old user field missing`
        );

        plansFailed++;
        continue;
      }

      // ------------------------------------------------------
      // Find old User using MongoDB _id
      // ------------------------------------------------------

      const user = await usersCollection.findOne({
        _id: savedPlan.user,
      });

      if (!user) {
        console.log(
          `   ⚠️ Skipping ${
            savedPlan.saveId || savedPlan._id
          } - user not found`
        );

        plansFailed++;
        continue;
      }

      // ------------------------------------------------------
      // User must have readable userId
      // ------------------------------------------------------

      if (!user.userId) {
        console.log(
          `   ⚠️ Skipping ${
            savedPlan.saveId || savedPlan._id
          } - userId missing`
        );

        plansFailed++;
        continue;
      }

      // ------------------------------------------------------
      // Convert:
      //
      // user: ObjectId(...)
      //
      // TO:
      //
      // userId: "HM-USER-001"
      // ------------------------------------------------------

      await savedPlansCollection.updateOne(
        {
          _id: savedPlan._id,
        },
        {
          $set: {
            userId: user.userId,
          },
          $unset: {
            user: "",
          },
        }
      );

      console.log(
        `   ✅ ${
          savedPlan.saveId || savedPlan._id
        } → ${user.userId}`
      );

      plansUpdated++;
    }

    console.log("\nSaved Plans Migration Complete.");
    console.log(`Updated : ${plansUpdated}`);
    console.log(`Skipped : ${plansSkipped}`);
    console.log(`Failed  : ${plansFailed}`);

    // ========================================================
    // STEP 3 - FIX OLD INDEX
    // ========================================================

    console.log("\n🔹 STEP 3: Fixing SavedPlan indexes...\n");

    const indexes = await savedPlansCollection.indexes();

    for (const index of indexes) {
      const keys = index.key || {};

      // Old index:
      // { user: 1, planKey: 1 }

      if (keys.user === 1 && keys.planKey === 1) {
        console.log(
          `   🗑️ Removing old index: ${index.name}`
        );

        await savedPlansCollection.dropIndex(index.name);
      }
    }

    // ========================================================
    // STEP 4 - CREATE NEW USER ID INDEX
    // ========================================================

    console.log(
      "\n🔹 STEP 4: Creating new SavedPlan index...\n"
    );

    await savedPlansCollection.createIndex(
      {
        userId: 1,
        planKey: 1,
      },
      {
        unique: true,
        name: "userId_1_planKey_1",
      }
    );

    console.log(
      "   ✅ userId + planKey unique index created."
    );

    // ========================================================
    // STEP 5 - ENSURE saveId INDEX
    // ========================================================

    await savedPlansCollection.createIndex(
      {
        saveId: 1,
      },
      {
        unique: true,
        name: "saveId_1",
      }
    );

    console.log(
      "   ✅ saveId unique index verified."
    );

    // ========================================================
    // FINAL RESULT
    // ========================================================

    console.log("\n==============================================");
    console.log(" MIGRATION COMPLETED SUCCESSFULLY ✅");
    console.log("==============================================");

    console.log(`\nUsers updated       : ${usersUpdated}`);
    console.log(`Saved Plans updated : ${plansUpdated}`);
    console.log(`Saved Plans skipped : ${plansSkipped}`);
    console.log(`Saved Plans failed  : ${plansFailed}`);

    console.log("\nDatabase structure:");
    console.log("User ownership  → HM-USER-XXX");
    console.log("MongoDB _id     → retained internally");
    console.log("SavedPlan key   → userId + planKey");

    console.log("\n==============================================\n");

  } catch (error) {
    console.error("\n❌ MIGRATION FAILED");
    console.error(error);
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log("🔌 MongoDB connection closed.");
    }
  }
}

// ============================================================
// RUN MIGRATION
// ============================================================

migrate();