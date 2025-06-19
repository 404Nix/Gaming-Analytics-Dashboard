import React, { useEffect, useState } from "react";
import axios from "axios";
import LiveMatchCard from "./LiveMatchCard";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const LiveMatchFeed = () => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const res = await axios.get("/api/analytics/live-matches");
      setMatches(res.data || []);
    } catch (err) {
      console.error("Error fetching live matches:", err);
    }
  };

  useEffect(() => {
    fetchMatches();

    socket.on("update_rewards", fetchMatches);
    return () => socket.off("update_rewards", fetchMatches);
  }, []);

  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 border border-blue-500/30 h-[400px] flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-4 flex-shrink-0">Live Match Feed</h3>
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-blue-500/30">
        {matches.length === 0 ? (
          <div className="text-gray-400 italic">No ongoing matches</div>
        ) : (
          matches.map((match) => (
            <LiveMatchCard
              key={match.id}
              playerName={match.playerName}
              gameTitle={match.gameTitle}
              startedAt={match.playedAt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LiveMatchFeed;
