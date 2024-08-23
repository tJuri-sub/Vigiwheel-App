import { PassIcon, UserIcon } from "../components/index/icons";
import { React, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post("/login", {
        username,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/landing");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#121212] to-[#030149] h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto bg-white min-h-[400px] rounded-lg flex shadowbox">
        {/* Left Side: Login Form */}
        <div className="w-[50%] p-3 flex flex-col justify-center">
          <h1 className="text-center text-2xl mb-4">Welcome!</h1>
          <form className="w-[60%] mx-auto" onSubmit={loginUser}>
            <div className="flex flex-col my-6">
              <div className="mb-4 relative flex items-center">
                <input
                  id="username"
                  name="username" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="Username"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-2 relative flex items-center">
                <input
                  id="password"
                  name="password" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <a
                className="text-slate-400 text-[14px] hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className="text-white bg-[#030149] w-[100%] text-center px-4 py-1 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#1b2374]"
                type="submit"
              >
                Log in
                {/* <LoginIcon className="ml-2" /> */}
              </button>
            </div>
          </form>
        </div>
        {/* Right Side: Logo */}
        <div className="bg-gradient-to-r from-[#04023d] to-[#0e1629] w-[50%] p-3 flex flex-col justify-center items-center rounded-r-lg">
          <img
            className="w-[30%] rounded-3xl shadow-lg mb-3"
            src="/logo.png"
            alt="Logo VigiWheel"
          />
          <h1 className="text-3xl font-bold text-white tracking-wider">
            VigiWheel
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
