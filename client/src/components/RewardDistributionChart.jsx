import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RewardDistributionChart = () => {
  const data = {
    labels: ["Coins", "XP Boost", "Loot Box"],
    datasets: [
      {
        label: "Rewards Claimed",
        data: [30, 22, 15],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">🎁 Reward Distribution</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RewardDistributionChart;
