import { FaEnvelope } from "react-icons/fa";

const AddPlayerForm = () => {
  return (
    <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white space-y-6">
      <h2 className="text-2xl font-bold">Add New Player</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Player Name */}
        <div>
          <label className="text-sm mb-1 block">Player Name</label>
          <input
            type="text"
            placeholder="Enter player name"
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="text-sm mb-1 block">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm pr-10 focus:outline-none"
          />
          <FaEnvelope className="absolute right-3 top-9 text-gray-400" />
        </div>

        {/* Score */}
        <div>
          <label className="text-sm mb-1 block">Initial Score</label>
          <input
            type="number"
            defaultValue={0}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm focus:outline-none"
          />
        </div>

        {/* Level */}
        <div>
          <label className="text-sm mb-1 block">Level</label>
          <input
            type="number"
            defaultValue={1}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
        Add Player
      </button>
    </div>
  );
};

export default AddPlayerForm;
