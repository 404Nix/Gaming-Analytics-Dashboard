const playerModel = require('../models/player.model');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const player = new playerModel(req.body);
    await player.save();

    const io = req.app.get("io");
    io.emit("new_player", player); // 🔴 Real-time push

    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const players = await playerModel.find();
  res.json(players);
});

module.exports = router;
