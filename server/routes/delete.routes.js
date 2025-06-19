const express = require('express');
const router = express.Router();
const playerModel = require("../models/player.model");
const matchModel = require("../models/match.model");
const gameModel = require("../models/game.model");
const rewardModel = require("../models/reward.model");

// Clear all players
router.delete('/players', async (req, res) => {
  await playerModel.deleteMany({});
  res.json({ message: 'All players cleared' });
});

// Clear all matches
router.delete('/matches', async (req, res) => {
  await matchModel.deleteMany({});
  res.json({ message: 'All matches cleared' });
});

// Clear all games
router.delete('/games', async (req, res) => {
  await gameModel.deleteMany({});
  res.json({ message: 'All games cleared' });
});

// Clear all rewards
router.delete('/rewards', async (req, res) => {
  await rewardModel.deleteMany({});
  res.json({ message: 'All rewards cleared' });
});

module.exports = router;
