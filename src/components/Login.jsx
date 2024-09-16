import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPageDark = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Log in to Connect</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="mb-6">
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
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-400 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Don't have an account?</span>{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPageDark;
