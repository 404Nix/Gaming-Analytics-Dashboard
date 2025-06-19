import { useEffect, useState } from "react";
import axios from "axios";

const AddRewardForm = () => {
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    playerId: "",
    rewardType: "",
    amount: 0,
    description: ""
  });

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get("/api/players");
        setPlayers(res.data);
      } catch (err) {
        console.error("Failed to fetch players", err);
      }
    };

    fetchPlayers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.playerId || !formData.rewardType) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await axios.post("/api/rewards", formData);
      alert("✅ Reward added!");
      setFormData({
        playerId: "",
        rewardType: "",
        amount: 0,
        description: ""
      });
    } catch (err) {
      console.error("Error adding reward:", err);
      alert("❌ Failed to add reward.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white space-y-6"
    >
      <h2 className="text-2xl font-bold">Add Reward</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm block mb-1">Player</label>
          <select
            name="playerId"
            value={formData.playerId}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          >
            <option value="">Select a player</option>
            {players.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Reward Type</label>
          <select
            name="rewardType"
            value={formData.rewardType}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          >
            <option value="">Select reward type</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
            <option value="Participation">Participation</option>
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-sm block mb-1">Description</label>
        <textarea
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          placeholder="Reward description"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
      >
        Add Reward
      </button>
    </form>
  );
};

export default AddRewardForm;
