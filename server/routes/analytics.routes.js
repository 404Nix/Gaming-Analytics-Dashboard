const express = require('express')
const analytics = require('../controllers/analytics.controller')
const router = express.Router()

router.get('/leaderboard', analytics.getLeaderboard)
router.get('/popular-games', analytics.getPopularGames)
router.get('/player-activity', analytics.getPlayerActivity)
router.get('/reward-distribution', analytics.getRewardDistribution)

module.exports = router;