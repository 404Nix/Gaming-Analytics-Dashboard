const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const adminModel = require('../models/admin.model');
// const authMiddleware = require('../middleware/auth.middleware');

// Public Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Admin List (Optional: Protect this if needed later)
router.get("/admins", async (req, res) => {
  try {
    const admins = await adminModel.find().select("-password"); // hide sensitive fields
    res.status(200).json(admins);
  } catch (err) {
    console.error("Failed to fetch admins:", err);
    res.status(500).json({ error: "Failed to fetch admins" });
  }
});

module.exports = router;
