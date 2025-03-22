import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <motion.h1
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading MarketPulse...
      </motion.h1>
    </div>
  );
}
