import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";

function App() {
  return (
    // <div>
    //   <Landing />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
