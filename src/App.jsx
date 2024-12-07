// /App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Insights from "./pages/Insight";

const App = () => {
  const { isLoggedIn, userData } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/insight" element={<Insights />} />
    </Routes>
  );
};

export default App;
