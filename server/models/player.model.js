const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
  name: { type: String },
  joinDate: { type: Date, default: Date.now },
  totalWins: { type: Number, default: 0 },
  totalGames: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
});

module.exports = mongoose.model('Player', playerSchema)