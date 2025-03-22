import React from "react";

export default function HomePage({ onGetStarted }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-white text-5xl font-bold">📈 MarketPulse</h1>
      <button
        onClick={onGetStarted}
        className="absolute top-6 right-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
      >
        Get Started
      </button>
    </div>
  );
}
