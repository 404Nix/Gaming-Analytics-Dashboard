const StatCard = ({ icon, title, value, color = "text-white", iconBg = "bg-blue-700" }) => {
  return (
    <div className="bg-[#1e293b77] rounded-lg px-6 py-4 text-white flex items-center gap-4 w-full border border-blue-500/30">
      <div className={`p-3 rounded ${iconBg}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-2xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;