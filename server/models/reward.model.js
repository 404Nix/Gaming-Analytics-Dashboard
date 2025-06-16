const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  rewardType: String,
  claimedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Reward", rewardSchema);
