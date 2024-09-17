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
      {isSubmitting && (
        <div
          className="flex justify-center h-screen items-center bg-transparent"
          role="status"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

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
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: {
                    value: 2,
                    message: "Name should contain at least 3 letters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Name should not exceed 10 letters",
                  },
                })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
              {errors.name && (
                <p className="text-xl py-1 text-red-600">
                  {errors.name.message}
                </p>
              )}
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
                {...register("email", {
                  required: { value: true, message: "Email is required" },
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
            <div>
              <input
                type="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 3,
                    message: "Password should contain at least 4 letters",
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
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("cPassword", {
                  required: {
                    value: true,
                    message: "You need to confirm your password",
                  },
                })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
              {errors.cPassword && (
                <p className="text-xl py-1 text-red-600">
                  {errors.cPassword.message}
                </p>
              )}
            </div>
            {isSubmitting ? (
              <div className="flex justify-center" role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
              >
                Continue
              </button>
            )}
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
