import { useEffect, useState } from "react";
import axios from "axios";

const ManageDataPanel = () => {
  const [stats, setStats] = useState({
    players: 0,
    games: 0,
    matches: 0,
    rewards: 0
  });
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/stats");
      setStats(res.data);
    } catch (err) {
      console.error("Failed to load stats", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const clearData = async (type) => {
    const confirm = window.confirm(`Are you sure you want to clear all ${type}?`);
    if (!confirm) return;

    try {
      await axios.delete(`/api/clear/${type}`);
      alert(`✅ All ${type} cleared`);
      fetchStats(); // Refresh counts
    } catch (err) {
      console.error(`Failed to clear ${type}`, err);
      alert(`❌ Failed to clear ${type}`);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* DB Stats */}
      <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-4">Database Statistics</h2>
        <ul className="space-y-2 text-lg">
          <li>Players: <strong>{stats.players}</strong></li>
          <li>Games: <strong>{stats.games}</strong></li>
          <li>Matches: <strong>{stats.matches}</strong></li>
          <li>Rewards: <strong>{stats.rewards}</strong></li>
        </ul>
        <button
          onClick={fetchStats}
          className="mt-6 bg-white/10 text-gray-300 text-sm px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className={loading ? "animate-spin" : ""}>🔄</span>
          Refresh Stats
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-4">Data Management</h2>
        <p className="text-sm text-gray-300 mb-4">
          Use these actions to manage your database. Be careful – these actions cannot be undone!
        </p>

        <div className="space-y-4">
          <button
            onClick={() => clearData("matches")}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2"
          >
            🗑️ Clear All Matches
          </button>
          <button
            onClick={() => clearData("rewards")}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2"
          >
            🗑️ Clear All Rewards
          </button>
          <button
            onClick={() => clearData("players")}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2"
          >
            🗑️ Clear All Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDataPanel;
