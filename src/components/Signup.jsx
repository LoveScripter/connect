import React from "react";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("working...");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg h-[95vh]">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Signup to Connect
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex justify-center relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              width={70}
              height={70}
              className="rounded-full relative border-4 border-gray-900 object-cover"
            />
            <label className="text-white text-lg font-semibold absolute" htmlFor="profilePic">Picture</label>
            <input className="hidden" type="file" name="picture" id="profilePic" />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
