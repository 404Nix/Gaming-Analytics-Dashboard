import TopNav from "../components/TopNav";
import StatCard from "../components/StatCard";
import { FaUser, FaGamepad, FaTrophy, FaStar } from "react-icons/fa";
import LeaderboardChart from "../components/LeaderboardChart";
import PopularGamesChart from "../components/PopularGamesChart";
import PlayerActivityChart from "../components/PlayerActivityChart";
import RewardDistributionChart from "../components/RewardDistributionChart";
import LiveMatchFeed from "../components/LiveMatchFeed";
import AdminPanel from "./AdminPanel";
const Dashboard = () => {
  return (
    <div className="min-h-screen text-white">
      {/* <AdminPanel /> */}
      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Gaming Analytics Dashboard</h2>
          <span className="text-green-400 text-sm">● Live Updates Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="Total Players"
            value="9"
            icon={<FaUser />}
            iconBg="bg-blue-600"
          />
          <StatCard
            title="Active Games"
            value="5"
            icon={<FaGamepad />}
            iconBg="bg-green-600"
          />
          <StatCard
            title="Total Matches"
            value="11"
            icon={<FaTrophy />}
            iconBg="bg-yellow-500"
          />
          <StatCard
            title="Rewards Claimed"
            value="5"
            icon={<FaStar />}
            iconBg="bg-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <LeaderboardChart />
          <PopularGamesChart />
          <PlayerActivityChart />
          <RewardDistributionChart />
        </div>

        <div className="">
          <LiveMatchFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
