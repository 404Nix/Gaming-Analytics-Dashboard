const AddRewardForm = () => {
  return (
    <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white space-y-6">
      <h2 className="text-2xl font-bold">Add Reward</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm block mb-1">Player</label>
          <select className="w-full bg-[#2e3859] p-3 rounded-lg text-sm">
            <option>Select a player</option>
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Reward Type</label>
          <select className="w-full bg-[#2e3859] p-3 rounded-lg text-sm">
            <option>Select reward type</option>
          </select>
        </div>

        <div>
          <label className="text-sm block mb-1">Amount</label>
          <input
            type="number"
            defaultValue={0}
            className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-sm block mb-1">Description</label>
        <textarea
          rows="3"
          className="w-full bg-[#2e3859] p-3 rounded-lg text-sm"
          placeholder="Reward description"
        ></textarea>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
        Add Reward
      </button>
    </div>
  );
};

export default AddRewardForm;
