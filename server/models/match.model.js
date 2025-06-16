const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  result: { type: String, enum: ["win", "loss"] },
  durationInMin: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Match", matchSchema);
