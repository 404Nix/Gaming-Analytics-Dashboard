import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PlayerActivityChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Active Users",
        data: [10, 15, 12, 18, 20, 16, 19],
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34, 211, 238, 0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    animation: {
      duration: 800,
      easing: "easeOutQuart"
    },
    plugins: {
      legend: {
        labels: { color: "#e5e7eb" }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#e5e7eb" },
        grid: { color: "#334155" }
      },
      x: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#334155" }
      }
    }
  };

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      <h3 className="text-xl font-bold mb-4 text-white">📈 Player Activity</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default PlayerActivityChart;
