import { useState } from "react";
import axios from "axios";

const AddPlayerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    totalScore: 0,
    level: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "totalScore" || name === "level" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter both name and email.");
      return;
    }

    try {
      await axios.post("/api/players", formData);
      alert("✅ Player added successfully");
      setFormData({ name: "", email: "", totalScore: 0, level: 1 });
    } catch (error) {
      console.error("Error adding player:", error);
      alert("❌ Failed to add player");
    }
  };

  return (
    <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Add New Player</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-white block mb-2">Player Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter player name"
            className="w-full p-3 rounded bg-[#2e3859] text-white"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full p-3 rounded bg-[#2e3859] text-white"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Initial Score</label>
          <input
            type="number"
            name="totalScore"
            value={formData.totalScore}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2e3859] text-white"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Level</label>
          <input
            type="number"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2e3859] text-white"
          />
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Add Player
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerForm;
