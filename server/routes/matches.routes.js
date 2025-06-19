const express = require('express')
const router = express.Router()
const matchModel = require('../models/match.model')

router.post('/', async (req, res) => {
  try {
    const match = new matchModel(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
    const games = await matchModel.find()
    res.json(games)
})

module.exports = router