import React from "react";
import Dashboard from "../Dashboard";
import Session from "../Session";
import Drivers from "../Drivers";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Landing() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/session" element={<Session />} />
            <Route path="/drivers" element={<Drivers />} />

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Landing;
