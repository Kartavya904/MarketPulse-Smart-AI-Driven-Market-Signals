import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

function MainApp() {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading backend/models/etc.
  }, []);

  const handleLogin = (adminMode) => {
    navigate(`/dashboard?adminMode=${adminMode}`);
  };

  if (loading) return <LoadingScreen />;

  return (
    <>
      {showLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <HomePage onGetStarted={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
