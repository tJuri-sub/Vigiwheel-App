import React from "react";
// import Sidebar from "./Sidebar";
// import Dashboard from "../Dashboard";
// import Session from "../Session";
// import Drivers from "../Drivers";
// import { Routes, Route, Navigate } from "react-router-dom";

function Landing() {
  return (
    // <div className="flex">
    //   <Sidebar />
    //   <div className="flex-grow p-4">
    //     <Routes>
    //       {/* Redirect from root to /dashboard */}
    //       <Route path="/" element={<Navigate to="/dashboard" />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/session" element={<Session />} />
    //       <Route path="/drivers" element={<Drivers />} />
    //     </Routes>
    //   </div>
    // </div>
    <div className="h-dvh flex items-center justify-center">
      <h1 className="text-3xl">Dashboard</h1>
    </div>
  );
}

export default Landing;
