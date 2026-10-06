const mongoose = require("mongoose");
require("dotenv").config();

const Booking = require("./models/Booking");
const User = require("./models/User");

const migrateBookings = async () => {
  try {
    console.log("");
    console.log("==============================================");
    console.log(" HAPPY MAPPY - BOOKING USER ID MIGRATION");
    console.log("==============================================");
    console.log("");

    // ============================================
    // CONNECT TO MONGODB
    // ============================================

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully ✅");
    console.log("");

    // ============================================
    // FIND ALL BOOKINGS
    // ============================================

    console.log("🔹 STEP 1: Checking bookings...");

    const bookings = await Booking.find({}).lean();

    console.log(`Found ${bookings.length} bookings.`);
    console.log("");

    let updated = 0;
    let skipped = 0;
    let failed = 0;

    // ============================================
    // ADD userId TO EXISTING BOOKINGS
    // ============================================

    for (const booking of bookings) {
      try {
        // Already migrated
        if (booking.userId) {
          console.log(
            `   ⏭️ ${booking.bookingReference} → ${booking.userId} (already updated)`
          );

          skipped++;
          continue;
        }

        // Booking must have the old MongoDB user ObjectId
        if (!booking.user) {
          console.log(
            `   ⚠️ ${booking.bookingReference} → No user ObjectId found`
          );

          failed++;
          continue;
        }

        // Find the corresponding user
        const user = await User.findById(booking.user)
          .select("_id userId")
          .lean();

        if (!user) {
          console.log(
            `   ❌ ${booking.bookingReference} → User not found`
          );

          failed++;
          continue;
        }

        if (!user.userId) {
          console.log(
            `   ❌ ${booking.bookingReference} → User has no userId`
          );

          failed++;
          continue;
        }

        // Add readable userId while keeping MongoDB user ObjectId
        await Booking.collection.updateOne(
          { _id: booking._id },
          {
            $set: {
              userId: user.userId,
            },
          }
        );

        console.log(
          `   ✅ ${booking.bookingReference} → ${user.userId}`
        );

        updated++;
      } catch (error) {
        console.error(
          `   ❌ Failed ${booking.bookingReference}:`,
          error.message
        );

        failed++;
      }
    }

    // ============================================
    // CREATE INDEX
    // ============================================

    console.log("");
    console.log("🔹 STEP 2: Checking userId index...");

    await Booking.collection.createIndex(
      { userId: 1 },
      {
        name: "userId_1",
      }
    );

    console.log("   ✅ userId index verified.");

    // ============================================
    // SUMMARY
    // ============================================

    console.log("");
    console.log("==============================================");
    console.log(" BOOKING MIGRATION COMPLETED ✅");
    console.log("==============================================");
    console.log("");

    console.log(`Bookings found   : ${bookings.length}`);
    console.log(`Bookings updated : ${updated}`);
    console.log(`Bookings skipped : ${skipped}`);
    console.log(`Bookings failed  : ${failed}`);

    console.log("");
    console.log("Booking structure:");
    console.log("MongoDB _id      → retained internally");
    console.log("user             → MongoDB User ObjectId");
    console.log("userId           → HM-USER-XXX");
    console.log("");

    console.log("==============================================");
  } catch (error) {
    console.error("");
    console.error("❌ BOOKING MIGRATION FAILED");
    console.error(error);
  } finally {
    await mongoose.connection.close();
    console.log("");
    console.log("🔌 MongoDB connection closed.");
  }
};

migrateBookings();