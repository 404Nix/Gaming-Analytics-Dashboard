import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const socket = io("http://localhost:5000");

const LeaderboardChart = () => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const res = await axios.get("/api/analytics/leaderboard");
      const players = res.data;
      setChartData({
        labels: players.map((player) => player.name),
        datasets: [
          {
            label: "Score",
            data: players.map((player) => player.totalScore),
            backgroundColor: "#38bdf8",
            borderRadius: 8,
            barThickness: 20
          }
        ]
      });
    } catch (error) {
      console.error("Error fetching Leaderboard data:", error);
    }
  };

  useEffect(() => {
    fetchChartData();

    socket.on("update_rewards", fetchChartData);
    return () => socket.off("update_rewards", fetchChartData);
  }, []);

  const options = {
    animation: {
      duration: 1000,
      easing: "easeOutQuart"
    },
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#d1d5db" },
        grid: { color: "#334155" }
      },
      x: {
        ticks: { color: "#d1d5db" },
        grid: { color: "#334155" }
      }
    }
  };

  if (!chartData) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 border border-blue-500/30 shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-white">🏆 Top Players Leaderboard</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default LeaderboardChart;
