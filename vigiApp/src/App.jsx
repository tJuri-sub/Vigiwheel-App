import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./components/LandingPage/Landing";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
