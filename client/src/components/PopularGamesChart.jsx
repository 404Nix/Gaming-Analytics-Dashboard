import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const PopularGamesChart = () => {
  const data = {
    labels: [
      "Battle Royale Arena",
      "Space Conquest",
      "Racing Thunder",
      "Puzzle Master",
      "Fantasy Quest"
    ],
    datasets: [
      {
        data: [30, 20, 25, 10, 15],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6"
        ],
        borderWidth: 2,
        borderColor: "#1e293b"
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      duration: 700,
    }
  };

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      {/* ✅ Heading aligned left */}
      <h3 className="text-xl font-bold text-white mb-4">🎮 Game Popularity</h3>

      {/* ✅ Centered chart */}
      <div className="flex justify-center">
        <div className="w-64 h-64">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PopularGamesChart;
