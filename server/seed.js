import mongoose from "mongoose";
import dotenv from "dotenv";
import Match from "./models/match.model.js";
import Player from "./models/player.model.js"; // ✅ Add this
import Game from "./models/game.model.js";     // ✅ And this too

const MONGO_URI = "mongodb+srv://nikhil123:nikhil693@cluster0.u21yz.mongodb.net/gaming_dashboard";

const seedMatches = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB");

    const players = await Player.find({});
    const games = await Game.find({});

    if (players.length === 0 || games.length === 0) {
      console.log("❌ No players or games found to seed matches.");
      process.exit(1);
    }

    const matches = [];

    // 20 ongoing matches
    for (let i = 0; i < 20; i++) {
      matches.push({
        playerId: players[Math.floor(Math.random() * players.length)]._id,
        gameId: games[Math.floor(Math.random() * games.length)]._id,
        status: "ongoing",
        date: new Date(Date.now() - Math.random() * 1000 * 60 * 30), // past 30 mins
      });
    }

    // 50 completed matches
    for (let i = 0; i < 50; i++) {
      matches.push({
        playerId: players[Math.floor(Math.random() * players.length)]._id,
        gameId: games[Math.floor(Math.random() * games.length)]._id,
        result: Math.random() > 0.5 ? "win" : "loss",
        durationInMin: Math.floor(Math.random() * 30) + 5,
        status: "completed",
        date: new Date(Date.now() - Math.random() * 1e9), // past few weeks
      });
    }
    await Match.deleteMany();
    await Match.insertMany(matches);
    console.log("✅ Seeded match data.");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedMatches();