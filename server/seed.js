// seed.js
const mongoose = require("mongoose");
const Player = require("./models/player.model");
const Game = require("./models/game.model");
const Match = require("./models/match.model");
const Reward = require("./models/reward.model");

const MONGO_URI = "mongodb+srv://nikhil123:nikhil693@cluster0.u21yz.mongodb.net/gaming_dashboard"; // Change if needed

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // Clear existing data
    await Promise.all([
      Player.deleteMany({}),
      Game.deleteMany({}),
      Match.deleteMany({}),
      Reward.deleteMany({}),
    ]);

    // Create sample games
    const games = await Game.insertMany([
      { title: "Battle Royale Arena" },
      { title: "Space Conquest" },
      { title: "Racing Thunder" },
      { title: "Puzzle Master" },
      { title: "Fantasy Quest" }
    ]);

    // Create sample players
    const players = await Player.insertMany([
      { name: "Alice", totalWins: 5, totalScore: 400 },
      { name: "Bob", totalWins: 3, totalScore: 300 },
      { name: "Charlie", totalWins: 7, totalScore: 500 },
      { name: "Daisy", totalWins: 2, totalScore: 250 },
      { name: "Eve", totalWins: 6, totalScore: 450 },
    ]);

    // Create matches
    const matches = [];
    for (let i = 0; i < 20; i++) {
      const match = {
        gameId: games[Math.floor(Math.random() * games.length)]._id,
        playerId: players[Math.floor(Math.random() * players.length)]._id,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      };
      matches.push(match);
    }
    const matchDocs = await Match.insertMany(matches);

    // Create rewards
    const rewards = matchDocs.slice(0, 10).map((match, i) => ({
      rewardType: i % 2 === 0 ? "Gold" : "Silver",
      playerId: match.playerId,
      matchId: match._id,
    }));
    await Reward.insertMany(rewards);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seed();
