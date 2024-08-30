import React from "react";
import Navbar from "./Navbar";

const UserProfile = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Profile Header */}
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-3xl border-b border-gray-700 pb-4 mb-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/600x200"
              alt="Profile Banner"
              className="w-full h-40 object-cover"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full border-4 border-gray-900 w-32 h-32 object-cover absolute left-4 -bottom-16"
            />
          </div>
          <div className="mt-8 ml-4">
            <h1 className="text-2xl font-bold">Username</h1>
            <p className="text-gray-400">@username</p>
            <p className="mt-2">
              Bio goes here. This is a placeholder for the user's bio.
            </p>
            <div className="flex mt-4 space-x-4">
              <div>
                <span className="font-bold">123</span> Following
              </div>
              <div>
                <span className="font-bold">456</span> Followers
              </div>
            </div>
          </div>
        </div>

        {/* User Posts */}
        <div className="w-full max-w-3xl">
          <div className="border-b border-gray-700 py-4">
            <h2 className="text-xl font-bold">Tweets</h2>
          </div>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p>This is a sample tweet. #hashtag</p>
              <div className="text-gray-400 text-sm mt-2">2h ago</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p>Another tweet example. Check this out!</p>
              <div className="text-gray-400 text-sm mt-2">4h ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
