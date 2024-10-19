import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./components/LandingPage/Landing";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserContextProvider, UserContext } from "../context/userContext"; // Import UserContext

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <AppRoutes />
    </UserContextProvider>
  );
}

// Separate component for routes to use user context
const AppRoutes = () => {
  const { user } = useContext(UserContext); // Access user context

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/landing" /> : <Login />}
      />
      <Route
        path="/landing/*"
        element={user ? <Landing /> : <Navigate to="/login" />}
      />
      <Route path="/dashboard" element={<Navigate to="/landing/dashboard" />} />
    </Routes>
  );
};

export default App;
