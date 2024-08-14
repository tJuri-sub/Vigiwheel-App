import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EnvelopeIcon, PassIcon, UserIcon } from "./index/icons";

function Signup() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } =
      info;

    axios
      .post("/api/signup", {
        firstname: firstName,
        lastname: lastName,
        username,
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        console.log(result);
        // Handle successful sign-up (e.g., redirect to login or display a success message)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-r from-[#121212] to-[#030149] h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto bg-white min-h-[400px] rounded-lg flex shadowbox">
        {/* Left Side: Sign Up Form */}
        <div className="w-[50%] px-3 py-6 flex flex-col justify-center">
          <h1 className="text-center text-2xl mb-4">Welcome!</h1>
          <form onSubmit={handleSubmit} className="w-[60%] mx-auto">
            <div className="flex flex-col my-3">
              <div className="mb-4 relative flex items-center">
                <input
                  id="firstname"
                  name="firstName"
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="First name"
                  value={info.firstName}
                  onChange={handleChange}
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
                  value={info.lastName}
                  onChange={handleChange}
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
                  value={info.username}
                  onChange={handleChange}
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
                  value={info.email}
                  onChange={handleChange}
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
                  value={info.password}
                  onChange={handleChange}
                />
                <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="password"
                  placeholder="Confirm Password"
                  value={info.confirmPassword}
                  onChange={handleChange}
                />
                <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
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
