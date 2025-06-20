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

const RewardDistributionChart = () => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/analytics/reward-distribution`);

      const labels = res.data.map((item) => item.rewardType);
      const counts = res.data.map((item) => item.count);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Claims",
            data: counts,
            backgroundColor: "#facc15",
            borderRadius: 8,
            barThickness: 20
          }
        ]
      });
    } catch (error) {
      console.error("Error fetching reward-distribution data:", error);
    }
  };

  useEffect(() => {
    fetchChartData();

    socket.on("update_rewards", () => {
      fetchChartData();
    });

    return () => {
      socket.off("update_rewards");
    };
  }, []);

  const options = {
    indexAxis: "y",
    animation: {
      duration: 900,
      easing: "easeOutCubic"
    },
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#334155" }
      },
      y: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#334155" }
      }
    }
  };

  if (!chartData) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      <h3 className="text-xl font-bold mb-4 text-white">🎁 Reward Distribution</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default RewardDistributionChart;
