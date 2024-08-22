import React from "react";
import { CgMore } from "react-icons/cg";

const Post = () => {
  return (
    <>
      <div className="flex p-5 items-center">
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://picsum.photos/10?random=2"
              width={12}
              height={12}
              alt="userPic"
            />
            <div>
              User <span className="text-gray-700">@Username</span>
            </div>
             
          </div>
          <div className="flex text-3xl">
            <CgMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
