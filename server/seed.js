const mongoose = require("mongoose");
const Player = require("./models/player.model");
const Game = require("./models/game.model");
const Match = require("./models/match.model");
const Reward = require("./models/reward.model");

mongoose.connect("mongodb+srv://nikhil123:nikhil693@cluster0.u21yz.mongodb.net/gaming_dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seed = async () => {
  await Player.deleteMany();
  await Game.deleteMany();
  await Match.deleteMany();
  await Reward.deleteMany();

  // 1. Seed 20 players
  const playerNames = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jade",
    "Karan", "Lena", "Mohit", "Nina", "Omar", "Priya", "Quinn", "Ravi", "Sara", "Tina"
  ];

  const players = await Player.insertMany(
    playerNames.map((name) => ({
      name,
      totalWins: Math.floor(Math.random() * 20),
      totalGames: Math.floor(Math.random() * 30) + 10,
      totalScore: Math.floor(Math.random() * 500) + 100,
    }))
  );

  // 2. Seed 6 games
  const games = await Game.insertMany([
    { title: "Battle Royale", genre: "Action", totalMatches: 40, winRate: 47 },
    { title: "Puzzle Quest", genre: "Puzzle", totalMatches: 35, winRate: 53 },
    { title: "Racing X", genre: "Racing", totalMatches: 38, winRate: 49 },
    { title: "Mystery Manor", genre: "Adventure", totalMatches: 25, winRate: 60 },
    { title: "Zombie Escape", genre: "Horror", totalMatches: 18, winRate: 35 },
    { title: "Farm Frenzy", genre: "Strategy", totalMatches: 22, winRate: 58 },
  ]);

  // 3. Seed 40 matches
  const matches = [];
for (let i = 0; i < 40; i++) {
  const player = players[Math.floor(Math.random() * players.length)];
  const game = games[Math.floor(Math.random() * games.length)];
  const result = Math.random() < 0.5 ? "win" : "loss";
  const status = Math.random() < 0.2 ? "ongoing" : "completed";

  // Distribute match dates over past 30 days
  const randomDaysAgo = Math.floor(Math.random() * 30);
  const matchDate = new Date();
  matchDate.setDate(matchDate.getDate() - randomDaysAgo);

  matches.push({
    playerId: player._id,
    gameId: game._id,
    result,
    durationInMin: Math.floor(Math.random() * 40) + 10,
    status,
    date: matchDate,
  });
}

  await Match.insertMany(matches);

  // 4. Seed 25 rewards
  const rewards = [];
  for (let i = 0; i < 25; i++) {
    const player = players[Math.floor(Math.random() * players.length)];
    rewards.push({
      playerId: player._id,
      rewardType: ["Gold", "Silver", "Bronze"][Math.floor(Math.random() * 3)],
    });
  }
  await Reward.insertMany(rewards);

  console.log("✅ Seed data added!");
  mongoose.disconnect();
};

seed();
