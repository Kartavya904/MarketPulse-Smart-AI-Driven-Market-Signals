import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
  const [params] = useSearchParams();
  const adminMode = params.get("adminMode") === "true";

  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-3xl">
        Welcome to MarketPulse Dashboard (
        {adminMode ? "Admin Mode" : "Guest Mode"})
      </h1>
    </div>
  );
}
