import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PlayerActivityChart = () => {
  const data = {
    labels: ["2025-06-10", "2025-06-11", "2025-06-12", "2025-06-13"],
    datasets: [
      {
        label: "Daily Active Users",
        data: [12, 18, 14, 20],
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">📈 Player Activity</h2>
      <Line data={data} />
    </div>
  );
};

export default PlayerActivityChart;
