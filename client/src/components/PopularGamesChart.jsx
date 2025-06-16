import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PopularGamesChart = () => {
  const data = {
    labels: ["Space Blaster", "Battle Royale", "Mystic Quest"],
    datasets: [
      {
        label: "Matches Played",
        data: [40, 25, 35],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">🎮 Game Popularity</h2>
      <Pie data={data} />
    </div>
  );
};

export default PopularGamesChart;
