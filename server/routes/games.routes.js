const express = require('express')
const gameModel = require('../models/game.model')
const router = express.Router()

router.post('/', async(req, res) => {
    try {
        const game = new gameModel(req.body)
        await game.save()
        res.status(201).json(game)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/', async(req, res) => {
    const games = await gameModel.find()
    res.json(games)
})

module.exports = router