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

const LeaderboardChart = () => {
  const data = {
    labels: ["Emma Blaze", "Nine Wind", "Sarah Storm", "Lisa Fire", "Alex Thunder", "David Ice", "Mike Lightning", "Chris Frost", "Nikhil"],
    datasets: [
      {
        label: "Score",
        data: [21000, 19500, 18500, 17000, 16000, 14500, 13000, 11500, 9800],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderRadius: 6
      }
    ]
  };

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

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 border border-blue-500/30">
      <h3 className="text-xl font-bold mb-4 text-white">🏆 Top Players Leaderboard</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeaderboardChart;
