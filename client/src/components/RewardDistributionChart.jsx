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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RewardDistributionChart = () => {
  const data = {
    labels: ["Coins", "XP Boost", "Loot Box", "Skins", "Keys"],
    datasets: [
      {
        label: "Claims",
        data: [24, 18, 14, 8, 5],
        backgroundColor: "#8b5cf6"
      }
    ]
  };

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

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      <h3 className="text-xl font-bold mb-4 text-white">🎁 Reward Distribution</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RewardDistributionChart;
