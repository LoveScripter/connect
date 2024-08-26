import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl max-w-sm w-full">
        <h2 className="text-3xl text-white font-extrabold mb-8 text-center">
          Welcome
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Please login to continue
        </p>
        <button
          onClick={() => loginWithRedirect()}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          type="button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
