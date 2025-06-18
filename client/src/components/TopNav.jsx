import landingImage from "../assets/landingImage.png";

const TopNav = ({ currentView, setCurrentView }) => {
  const tabs = ["Dashboard", "Admin Panel", "Login"];

  return (
    <header className="bg-[#0f172a] text-white px-6 py-4 flex justify-between items-center">
      <h1 className="flex items-center text-2xl font-bold text-white">
        <img src={landingImage} alt="GamePro Logo" className="w-10 h-10 mr-2" />
        GamePro
      </h1>

      <nav className="flex gap-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentView(tab)}
            className={`px-3 py-1 rounded ${
              currentView === tab
                ? "bg-white text-black font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <span className="text-sm text-gray-300">Welcome, Admin</span>
    </header>
  );
};

export default TopNav;
