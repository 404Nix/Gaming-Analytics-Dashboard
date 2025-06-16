const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const playerRouter = require("./routes/players.routes");
const gameRouter = require("./routes/games.routes");
const matchRouter = require("./routes/matches.routes")
const rewardRouter = require("./routes/rewards.routes")
const analyticsRouter = require("./routes/analytics.routes")
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use('/api/players', playerRouter)
app.use('/api/games', gameRouter)
app.use('/api/matches', matchRouter)
app.use('/api/rewards', rewardRouter)
app.use("/api/analytics", analyticsRouter);


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
