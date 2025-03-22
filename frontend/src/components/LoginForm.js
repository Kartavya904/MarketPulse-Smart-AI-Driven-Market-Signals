import React, { useState } from "react";
import api from "../utils/api";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { email, password });
      if (response.data.success) {
        onLogin(true);
      } else {
        setError("Invalid credentials!");
      }
    } catch (err) {
      setError("Server Error!");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow text-white">
      <input
        type="email"
        placeholder="Email"
        className="p-2 w-full rounded mb-2 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 w-full rounded mb-4 text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-400 mb-2">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Login
      </button>
      <button
        onClick={() => onLogin(false)}
        className="mt-2 bg-gray-600 px-4 py-2 rounded hover:bg-gray-700 w-full"
      >
        Continue as Guest
      </button>
    </div>
  );
}
