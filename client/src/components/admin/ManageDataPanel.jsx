const ManageDataPanel = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* DB Stats */}
      <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-4">Database Statistics</h2>
        <ul className="space-y-2 text-lg">
          <li>Players: <strong>10</strong></li>
          <li>Games: <strong>5</strong></li>
          <li>Matches: <strong>17</strong></li>
          <li>Rewards: <strong>5</strong></li>
        </ul>
        <button className="mt-6 bg-white/10 text-gray-300 text-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="animate-spin">🔄</span>
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
          <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2">
            🗑️ Clear All Matches
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2">
            🗑️ Clear All Rewards
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2">
            🗑️ Clear All Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDataPanel;
