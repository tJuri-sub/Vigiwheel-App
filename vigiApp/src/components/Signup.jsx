import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setConfirmpass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="w-2/5 h-3/4 drop-shadow-md bg-white rounded-lg flex flex-col justify-center items-center p-5">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
          <input
            className="w-full border-2 p-2 border-black"
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border-2 p-2 border-black"
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border-2 p-2 border-black"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full border-2 p-2 border-black"
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            onChange={(e) => setConfirmpass(e.target.value)}
          />
          <button className="hover:bg-slate-300 bg-slate-400 p-3" type="submit">
            Register
          </button>
        </form>
        <Link to="/login" className="mt-2 hover:bg-slate-300 bg-slate-400 p-3">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
