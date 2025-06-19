import React from "react";
import { FaTrophy, FaClock, FaStopwatch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const LiveMatchCard = ({ playerName, gameTitle, startedAt }) => {
  const formattedTime = new Date(startedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="bg-gradient-to-r from-[#2a3551] to-[#23305a6c] border border-white/10 rounded-lg p-4 flex justify-between items-start text-white shadow-sm hover:shadow-md transition">
      {/* Left Side */}
      <div className="flex gap-3 items-start">
        <FaTrophy className="text-yellow-400 text-lg mt-1" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BsPerson className="text-gray-400" />
            <span className="font-semibold text-white">{playerName}</span>
            <span className="text-green-400 text-sm font-medium">Ongoing</span>
          </div>

          <div className="flex items-center text-sm gap-4 text-gray-300">
            <span>{gameTitle}</span>
            <span className="flex items-center gap-1">
              <FaStopwatch className="text-gray-400" /> live
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-xs text-gray-500 mt-1">{formattedTime}</div>
    </div>
  );
};

export default LiveMatchCard;
