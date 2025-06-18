import TopNav from "../components/TopNav";
import StatCard from "../components/StatCard";
import { FaUser, FaGamepad, FaTrophy, FaStar } from "react-icons/fa";
import LeaderboardChart from "../components/LeaderboardChart";
import PopularGamesChart from "../components/PopularGamesChart";
import PlayerActivityChart from "../components/PlayerActivityChart";
import RewardDistributionChart from "../components/RewardDistributionChart";
import LiveMatchFeed from "../components/LiveMatchFeed";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {

  const [stats, setStats] = useState({
    players: 0,
    games: 0,
    matches: 0,
    rewards: 0
  });

  const fetchStats = async () => {
      try {
        const res = await axios.get('/api/stats');
        // console.log(res.data)
        setStats(res.data);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };


  useEffect(() => {
    fetchStats();
  }, []);


  return (
    <div className="min-h-screen text-white">
      {/* <AdminPanel /> */}
      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Gaming Analytics Dashboard</h2>
          <span className="text-green-400 text-sm">● Live Updates Active</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="Total Players"
            value={stats.players}
            icon="👤"
            iconBg="bg-blue-600"
          />
          <StatCard
            title="Active Games"
            value={stats.games}
            icon="🎮"
            iconBg="bg-green-600"
          />
          <StatCard
            title="Total Matches"
            value={stats.matches}
            icon="🏆"
            iconBg="bg-yellow-500"
          />
          <StatCard
            title="Rewards Claimed"
            value={stats.rewards}
            icon="🎁"
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
