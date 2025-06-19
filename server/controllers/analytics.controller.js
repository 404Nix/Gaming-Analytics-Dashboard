const playerModel = require("../models/player.model");
const matchModel = require("../models/match.model");
const gameModel = require("../models/game.model");
const rewardModel = require("../models/reward.model");

exports.getLeaderboard = async (req, res) => {
    try {
    const topPlayers = await playerModel.find()
      .sort({ totalWins: -1, totalScore: -1 })
      .limit(10);
    res.json(topPlayers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getPopularGames = async (req, res) => {
  try {
    const result = await matchModel.aggregate([
      {
        $group: {
          _id: "$gameId",
          matchCount: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "games",
          localField: "_id",
          foreignField: "_id",
          as: "game"
        }
      },
      { $unwind: "$game" },
      {
        $project: {
          gameTitle: "$game.title",
          matchCount: 1
        }
      },
      { $sort: { matchCount: -1 } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getPlayerActivity = async (req, res) => {
  try {
    const result = await matchModel.aggregate([
      {
        $group: {
          _id: {
            date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            player: "$playerId"
          }
        }
      },
      {
        $group: {
          _id: "$_id.date",
          uniquePlayers: { $sum: 1 }
        }
      },
      {
        $project: {
          date: "$_id",
          uniquePlayers: 1,
          _id: 0
        }
      },
      { $sort: { date: 1 } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getRewardDistribution = async (req, res) => {
  try {
    const result = await rewardModel.aggregate([
      {
        $group: {
          _id: "$rewardType",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          rewardType: "$_id",
          count: 1,
          _id: 0
        }
      },
      { $sort: { count: -1 } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getDashboardStats = async (req, res) => {
  try {
    const [players, games, matches, rewards] = await Promise.all([
      playerModel.countDocuments(),
      gameModel.countDocuments(),
      matchModel.countDocuments(),
      rewardModel.countDocuments()
    ]);

    // console.log(players);

    res.json({ players, games, matches, rewards });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getLiveMatches = async (req, res) => {
  try {
    const matches = await matchModel.find({ status: "completed" })
      .sort({ date: -1 })
      .limit(10)
      .populate("playerId", "name")
      .populate("gameId", "title");

    const formatted = matches.map((match) => ({
      id: match._id,
      playerName: match.playerId?.name || "Unknown Player",
      gameTitle: match.gameId?.title || "Unknown Game",
      result: match.result,
      duration: match.durationInMin,
      playedAt: match.date,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching recent matches:", err);
    res.status(500).json({ error: "Server Error" });
  }
};