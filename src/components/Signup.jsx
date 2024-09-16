import React from "react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
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
    <>
      {isSubmitting && <div>Loading</div>}

      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg h-[95vh]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Signup to Connect
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center relative">
              <img
                src="src\assets\react.svg"
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
                type="file"
                name="picture"
                id="profilePic"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your Name"
                {...register("name")}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your Username"
                {...register("username", {
                  required: { value: true, message: "Username is required" },
                  minLength: {
                    value: 3,
                    message: "Username should contain at least 4 letters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Username should not exceed 8 letters",
                  },
                })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
              {errors.username && (
                <p className="text-xl py-1 text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your Email"
                {...register("email")}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your Password"
                {...register("password")}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("cpassword")}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
            >
              Continue
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </div>
    </>
  );
};

export default Signup;
