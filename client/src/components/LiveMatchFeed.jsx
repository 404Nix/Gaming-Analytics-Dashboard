import React from 'react';
import LiveMatchCard from './LiveMatchCard';

const LiveMatchFeed = () => {
  return (
    <div className="bg-[#1e293b77] rounded-xl p-6 border border-blue-500/30 h-[400px] flex flex-col">
      {/* ✅ Heading stays fixed */}
      <h3 className="text-2xl font-bold text-white mb-4 flex-shrink-0">Live Match Feed</h3>

      {/* ✅ Scroll only the feed list */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-blue-500/30">
        {Array.from({ length: 15 }).map((_, i) => (
          <LiveMatchCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default LiveMatchFeed;
