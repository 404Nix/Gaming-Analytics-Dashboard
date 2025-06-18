// routes/stats.route.js
const express = require('express');
const router = express.Router();
const stats = require('../controllers/analytics.controller');

router.get('/', stats.getDashboardStats);

module.exports = router;
