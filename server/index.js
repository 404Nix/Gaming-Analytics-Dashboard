const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const playerRouter = require("./routes/players.routes");
const gameRouter = require("./routes/games.routes");
const matchRouter = require("./routes/matches.routes");
const rewardRouter = require("./routes/rewards.routes");
const analyticsRouter = require("./routes/analytics.routes");
const dashboardStats = require("./routes/dashboardStats.routes");
const deleteRouter = require("./routes/delete.routes");
const authRouter = require("./routes/auth.routes");

const app = express();
const server = http.createServer(app);

// ⚙️ Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


app.set("io", io);

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🚏 API Routes
app.use("/api/players", playerRouter);
app.use("/api/games", gameRouter);
app.use("/api/matches", matchRouter);
app.use("/api/rewards", rewardRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/stats", dashboardStats);
app.use("/api/clear", deleteRouter);
app.use("/api/auth", authRouter);

// 🔌 Socket Events
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// 🌱 Database + Server
mongoose
  .connect(`${process.env.MONGO_URI}/gaming_dashboard`)
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`❌ MongoDB Connection error ${err}`);
  });
