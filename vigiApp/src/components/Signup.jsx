// function Signup() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmpass, setConfirmpass] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("", { name, email, password })
//       .then((result) => console.log(result))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="bg-gray-200 flex justify-center items-center h-screen">
//       <div className="w-2/5 h-3/4 drop-shadow-md bg-white rounded-lg flex flex-col justify-center items-center p-5">
//         <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
//           <input
//             className="w-full border-2 p-2 border-black"
//             type="text"
//             placeholder="username"
//             name="username"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             className="w-full border-2 p-2 border-black"
//             type="email"
//             placeholder="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="w-full border-2 p-2 border-black"
//             type="password"
//             placeholder="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             className="w-full border-2 p-2 border-black"
//             type="password"
//             placeholder="confirm password"
//             name="confirmpassword"
//             onChange={(e) => setConfirmpass(e.target.value)}
//           />
//           <button className="hover:bg-slate-300 bg-slate-400 p-3" type="submit">
//             Register
//           </button>
//         </form>
//         <Link to="/login" className="mt-2 hover:bg-slate-300 bg-slate-400 p-3">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EnvelopeIcon, PassIcon, UserIcon } from "./index/icons";

function Signup() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [uname, setUname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setConfirmpass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", { fname, lname, uname, email, password, confirmpass })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-r from-[#121212] to-[#030149] h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto bg-white min-h-[400px] rounded-lg flex shadowbox">
        {/* Left Side: Login Form */}
        <div className="w-[50%] px-3 py-6 flex flex-col justify-center">
          <h1 className="text-center text-2xl mb-4">Welcome!</h1>
          <form onSubmit={handleSubmit} className="w-[60%] mx-auto">
            <div className="flex flex-col my-3">
              <div className="mb-4 relative flex items-center">
                <input
                  id="firstname"
                  name="firstname" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="first name"
                  onChange={(e) => setFname(e.target.value)}
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="lastname"
                  name="lastname" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="last name"
                  onChange={(e) => setLname(e.target.value)}
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="username"
                  name="username" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUname(e.target.value)}
                />
                <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="email"
                  name="email" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <EnvelopeIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="password"
                  name="password" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
              <div className="mb-4 relative flex items-center">
                <input
                  id="confirmationpass"
                  name="password" // Add name attribute
                  className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10"
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) => setConfirmpass(e.target.value)}
                />
                <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button
                className="text-white bg-[#030149] w-[100%] text-center px-4 py-1 mb-[2px] flex items-center justify-center rounded-md cursor-pointer hover:bg-[#1b2374] transition hover:duration-100"
                type="submit"
              >
                Sign up
              </button>
              <Link
                to="/login"
                className="text-slate-400 text-[14px] hover:underline"
                href="#"
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
