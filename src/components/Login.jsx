import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPageDark = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Log in to Connect
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required to continue",
                },
                pattern: {
                  value: new RegExp(
                    "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                  ),
                  message: "Please enter a valid email",
                },
              })}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
            {errors.email && (
              <p className="text-xl py-1 text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              {...register("password", {
                required: { value: true, message: "Password is required to continue" },
                minLength: {
                  value: 3,
                  message: "Please enter a valid password",
                },
              })}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
            {errors.password && (
              <p className="text-xl py-1 text-red-600">
                {errors.password.message}
              </p>
            )}
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
          <span className="text-gray-500">Don't have an account?</span>{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPageDark;
