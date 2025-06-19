import { useEffect, useState } from "react";
import axios from "axios";

const AddMatchForm = () => {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState({
    playerId: "",
    gameId: "",
    result: "",
    totalScore: 0,
    durationInMin: 0,
    status: "completed", // ← add this line
  });

  // Fetch players and games for dropdowns
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playerRes, gameRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_BASE}/api/players`),
          axios.get(`${import.meta.env.VITE_API_BASE}/api/games`),
        ]);

        // console.log(playerRes)
        // console.log(gameRes)
        setPlayers(playerRes.data);
        setGames(gameRes.data);
      } catch (err) {
        console.error("Failed to load players or games", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "durationInMin" || name === "totalScore" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.playerId || !formData.gameId || !formData.result) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE}/api/matches`, formData);
      alert("✅ Match added!");
      setFormData({
        playerId: "",
        gameId: "",
        result: "",
        durationInMin: 0,
        status: "completed", // ✅ add this to match your model
      });
    } catch (err) {
      console.error("Error adding match:", err);
      alert("❌ Failed to add match");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white space-y-6"
    >
      <h2 className="text-2xl font-bold">Add Match Result</h2>

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
            {players.map(p => (
              <option key={p._id} value={p._id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Game</label>
          <select
            name="gameId"
            value={formData.gameId}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          >
            <option value="">Select a game</option>
            {games.map(g => (
              <option key={g._id} value={g._id}>{g.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Result</label>
          <select
            name="result"
            value={formData.result}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          >
            <option value="">Select result</option>
            <option value="win">Win</option>
            <option value="loss">Loss</option>
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Score</label>
          <input
            type="number"
            name="totalScore"
            value={formData.totalScore}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="text-sm block mb-1">Duration (minutes)</label>
          <input
            type="number"
            name="durationInMin"
            value={formData.durationInMin}
            onChange={handleChange}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
      >
        Add Match
      </button>
    </form>
  );
};

export default AddMatchForm;
