import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import axios from "axios";

const PopularGamesChart = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/analytics/popular-games");
      // console.log(res.data)

      setChartData({
        labels: res.data.map((item) => item.gameTitle),
        datasets: [
          {
            data: res.data.map((item) => item.matchCount),
            backgroundColor: [
              "#3b82f6",
              "#10b981",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6",
            ],
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching popular games data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!chartData) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 shadow-xl border border-blue-500/30">
      {/* ✅ Heading aligned left */}
      <h3 className="text-xl font-bold text-white mb-4">🎮 Game Popularity</h3>

      {/* ✅ Centered chart */}
      <div className="flex justify-center">
        <div className="w-[18rem] h-[18rem] relative">
          <Pie
          data={chartData}
          options={{
            animation: {
              animateScale: true,
              duration: 1200,
              easing: "easeOutCubic",
            },
            plugins: {
              legend: {
                position: "bottom",
                labels: { color: "#e5e7eb" },
              },
            },
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default PopularGamesChart;
