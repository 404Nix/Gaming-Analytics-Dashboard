const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  totalMatches: { type: Number, default: 0 },
  winRate: { type: Number, default: 0 },
});

module.exports = mongoose.model("Game", gameSchema);
