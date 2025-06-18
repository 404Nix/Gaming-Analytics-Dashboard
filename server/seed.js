import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Reward from './models/reward.model.js'; // ✅ Adjust path as needed

const MONGO_URI = "mongodb+srv://nikhil123:nikhil693@cluster0.u21yz.mongodb.net/gaming_dashboard";


const rewardTypes = [
  "Gold Chest",
  "Silver Chest",
  "Bronze Chest",
  "Epic Box",
  "Mystery Box",
  "Daily Bonus",
  "Seasonal Reward",
  "Event Loot",
  "Milestone Unlock",
  "XP Booster",
];

const seedRewards = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Optional: Clear old data first
    await Reward.deleteMany();

    const rewards = [];

    for (let type of rewardTypes) {
      const claims = Math.floor(Math.random() * 30) + 20; // 20–50 entries per type
      for (let i = 0; i < claims; i++) {
        rewards.push({
          rewardType: type,
          claimedAt: new Date(Date.now() - Math.random() * 1e10),
        });
      }
    }

    await Reward.insertMany(rewards);
    console.log(`✅ Seeded ${rewards.length} rewards into DB.`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedRewards();
