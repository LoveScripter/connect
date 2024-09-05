import React from "react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const Signup = () => {
  const [profile, setprofile] = useState(null);
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPass);
  };

  const onImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setprofile(e.target.result);
        console.log(e.target.result)
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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
              src={profile}
              alt="Profile"
              width={70}
              height={70}
              className="rounded-full w-20 h-20 relative border-4 border-gray-900 object-cover"
            />
            <label
              className="text-white text-lg font-semibold absolute top-[26px] left-[205px] rotate-[17deg]"
              htmlFor="profilePic"
            >
              <MdEdit className="text-white text-3xl" />
            </label>
            <input
              className="hidden"
              onChange={onImage}
              type="file"
              name="picture"
              id="profilePic"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setconfirmPass(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
