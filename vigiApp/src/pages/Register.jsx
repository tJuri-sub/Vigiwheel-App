import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EnvelopeIcon, PassIcon, UserIcon } from "../components/index/icons";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { firstname, lastname, username, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successfull! Welcome ");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#121212] to-[#030149] h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto bg-white min-h-[400px] rounded-lg flex shadowbox">
        {/* Left Side: Sign Up Form */}
        <div className="w-[50%] px-3 py-6 flex flex-col justify-center">
          <h1 className="text-center text-2xl mb-4">Welcome!</h1>
          <form onSubmit={registerUser} className="w-[60%] mx-auto">
            <div className="flex flex-col my-3">
              <div className="mb-4 relative flex items-center">
                <input
                  id="firstname"
                  name="firstName"
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="First name"
                  value={data.firstname}
                  onChange={(e) =>
                    setData({ ...data, firstname: e.target.value })
                  }
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="lastname"
                  name="lastName"
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="Last name"
                  value={data.lastname}
                  onChange={(e) =>
                    setData({ ...data, lastname: e.target.value })
                  }
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="username"
                  name="username"
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
              <div className="mb-4 relative flex items-center">
                <input
                  id="email"
                  name="email"
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <EnvelopeIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="password"
                  name="password"
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
              <div className="flex flex-col justify-center">
                <button
                  className="text-white bg-[#030149] w-[100%] text-center px-4 py-1 mb-[2px] flex items-center justify-center rounded-md cursor-pointer hover:bg-[#1b2374] transition hover:duration-100"
                  type="submit"
                >
                  Sign Up
                </button>
                <Link
                  to="/login"
                  className="text-slate-400 text-[14px] hover:underline"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
        {/* Right Side: Logo */}
        <div className="bg-gradient-to-r from-[#04023d] to-[#0e1629] w-[50%] p-3 flex flex-col justify-center items-center rounded-r ">
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

export default Signup;
