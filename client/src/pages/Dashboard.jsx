import React from 'react'
import LeaderboardChart from "../components/LeaderboardChart";
import PlayerActivityChart from "../components/PlayerActivityChart";
import PopularGamesChart from "../components/PopularGamesChart";
import RewardDistributionChart from "../components/RewardDistributionChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <LeaderboardChart />
      <PopularGamesChart />
      <PlayerActivityChart />
      <RewardDistributionChart />
    </div>
  );
}

export default Dashboard