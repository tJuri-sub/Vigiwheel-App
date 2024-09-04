import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./dashPages/Dashboard";
import Session from "./dashPages/Session";
import Drivers from "./dashPages/Drivers";
import { Routes, Route, Navigate } from "react-router-dom";

function Landing() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/session" element={<Session />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </div>
    </div>
  );
}

export default Landing;
