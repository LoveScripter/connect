import React from "react";
import Post from "./Post";
import { GrGallery } from "react-icons/gr";
import { useRef, useState } from "react";

const Hero = () => {
  const inputFile = useRef(null);
  const [profile, setProfile] = useState(null)

  const handleClick = () => {
    let file = inputFile.current.click();
  };

  const onProfile = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex text-white justify-center border-x-2 border-black">
        <div className="flex flex-col w-[56vw]">
          <div className="text-white bg-[rgb(31,41,55)] text-xl">
            <div className="w-full flex justify-center items-center flex-row">
              <div className="w-1/2 cursor-pointer active:border-blue-700 active:border-b-2 text-center hover:bg-slate-600 p-4 transition-colors">
                For you
              </div>
              <div className="w-1/2  cursor-pointer active:border-blue-700 focus:border-blue-700 active:border-b-2 text-center hover:bg-slate-600 p-4 transition-colors">
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
                  src={profile ? profile : "src/assets/react.svg"}
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
                  className="hidden"
                  onChange={onProfile}
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
      </div>
    </>
  );
};

export default Hero;
