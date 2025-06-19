const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const playerRouter = require("./routes/players.routes");
const gameRouter = require("./routes/games.routes");
const matchRouter = require("./routes/matches.routes")
const rewardRouter = require("./routes/rewards.routes")
const analyticsRouter = require("./routes/analytics.routes")
const dashboardStats = require('./routes/dashboardStats.routes')
const deleteRouter = require('./routes/delete.routes')
const authRouter = require('./routes/auth.routes')
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use('/api/players', playerRouter)
app.use('/api/games', gameRouter)
app.use('/api/matches', matchRouter)
app.use('/api/rewards', rewardRouter)
app.use("/api/analytics", analyticsRouter);

app.use('/api/stats', dashboardStats);

// delete Route
app.use('/api/clear', deleteRouter);

// auth rotue
app.use('/api/auth', authRouter);



mongoose
  .connect(`${process.env.MONGO_URI}/gaming_dashboard`)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection error ${err}`);
  });
