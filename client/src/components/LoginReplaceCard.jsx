import React from "react";

const LoginReplaceCard = ({ message }) => {
    // console.log(message)
  return (
    <div className="max-w-md mx-auto mt-20 bg-[#1e293b99] border border-white/10 p-6 rounded-lg shadow-lg text-white text-center">
      {/* <h2 className="text-2xl font-bold mb-4">🔒 {}</h2> */}
      <p className="text-sm text-gray-300">
        {message}
      </p>
    </div>
  );
};

export default LoginReplaceCard;
