import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeaderboardChart = () => {
  const data = {
    labels: ["Alice", "Bob", "Charlie"],
    datasets: [
      {
        label: "Total Wins",
        data: [12, 9, 7],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">🏆 Top Players</h2>
      <Bar data={data} />
    </div>
  );
};

export default LeaderboardChart;
