const AdminTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: "Add Player", icon: "👤" },
    { label: "Add Match", icon: "⚡" },
    { label: "Add Reward", icon: "🎁" },
    { label: "Manage Data", icon: "🗄️" }
  ];

  return (
    <div className="flex bg-[#1e293b] p-2 rounded-xl mb-6 justify-around">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`px-3 py-2 rounded-lg font-medium text-sm flex gap-2 transition-all w-full ${
            activeTab === tab.label
              ? "bg-white text-black shadow"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AdminTabs;
