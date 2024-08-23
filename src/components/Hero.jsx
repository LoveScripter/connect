import React from "react";
import Post from "./Post";
import { GrGallery } from "react-icons/gr";
import { useRef } from "react";

const Hero = () => {
  const inputFile = useRef(null);

  const handleClick = () => {
    let file = inputFile.current.click();
  };

  return (
    <>
      <div className="flex text-white justify-center">
        <div className="flex flex-col">
          <div className="w-[60vw] text-white bg-[rgb(31,41,55)] text-xl">
            <div className="w-full flex justify-center items-center flex-row">
              <div className="w-1/2 text-center hover:bg-slate-600 p-4 transition-colors">
                For you
              </div>
              <div className="w-1/2 text-center hover:bg-slate-600 p-4 transition-colors">
                Following
              </div>
            </div>
            <div className="w-full bg-black h-[0.2vh]" />
          </div>
          <div className="profile">
            <div className="flex flex-row gap-10 p-6">
              <label htmlFor="text">
                <img
                  className="h-10 w-11 rounded-full"
                  src="https://picsum.photos/10?random=2"
                  width={12}
                  height={12}
                  alt="userPic"
                />
              </label>
              <input
                className="w-full outline-none bg-transparent text-xl text-white"
                type="text"
                name="text"
                id="text"
                placeholder="What is happening?!"
              />
            </div>
            <div className="w-[50vw] mx-auto  bg-black h-[0.2vh]"></div>
            <div className=" my-3 w-[50vw] flex flex-row justify-between items-start mx-auto">
              <div className="cursor-pointer" onClick={handleClick}>
                <GrGallery className="text-blue-400 text-lg" />
                <input
                  type="file"
                  name="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                />
              </div>
              <div className="post">
                <button className="bg-blue-600 hover:bg-blue-500 transition-colors font-bold w-[6vw] p-2 rounded-3xl">
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-black h-[0.2vh]" />
          <Post />
        </div>
        <div className="w-[0.2vw] bg-black h-full" />
      </div>
    </>
  );
};

export default Hero;
