// /App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Insights from "./pages/Insight";
import Dashboard from "./components/doctorsdashboard/Dashboard";
import Display from "./components/patient/display"
import Notification from './components/patient/Notifications'
import HealthTip from './components/patient/HealthTip'
const App = () => {
  const { isLoggedIn, userData } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/insight" element={<Insights />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/display" element={<Display />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/health" element={<HealthTip />} />
    </Routes>
  );
};

export default App;
