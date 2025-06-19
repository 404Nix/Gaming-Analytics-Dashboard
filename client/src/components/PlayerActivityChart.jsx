import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { io } from "socket.io-client";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);
const socket = io("http://localhost:5000");

const PlayerActivityChart = () => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/analytics/player-activity`);
      // console.log(res.data)
      setChartData({
        labels: res.data.map((item) => item.date),
        datasets: [
          {
            label: "Active Players",
            data: res.data.map((item) => item.uniquePlayers),
            fill: true,
            borderColor: "#38bdf8",
            backgroundColor: "rgba(56,189,248,0.2)",
            tension: 0.4,
            pointBackgroundColor: "#38bdf8",
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching player activity data:", error);
    }
  };

  useEffect(() => {
    fetchChartData();

    socket.on("update_rewards", fetchChartData);
    return () => socket.off("update_rewards", fetchChartData);
  }, []);

  if (!chartData) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      <h3 className="text-xl font-bold text-white mb-4">📈 Player Activity</h3>
      <Line
        data={chartData}
        options={{
          animation: {
            duration: 1000,
            easing: "easeInOutQuart",
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: { color: "#e5e7eb" },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
            y: {
              ticks: { color: "#e5e7eb" },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
          },
        }}
      />
    </div>
  );
};

export default PlayerActivityChart;
