const rewardModel = require('../models/reward.model');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const reward = new rewardModel(req.body);
    await reward.save();

    const io = req.app.get("io");
    io.emit("new_reward", reward); // 🔴 Real-time push

    res.status(201).json(reward);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const rewards = await rewardModel.find();
  res.json(rewards);
});

module.exports = router;
