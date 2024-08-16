import React from "react";

const Header = () => {
  return (
    <div className="w-[64vw] text-white bg-[rgb(31,41,55)] text-xl">
      <div className="w-full flex justify-center items-center flex-row">
        <div className="w-1/2 text-center hover:bg-slate-600 p-4 transition-colors">For you</div>
        <div className="w-1/2 text-center hover:bg-slate-600 p-4 transition-colors">
          Following
        </div>
      </div>
      <div className="w-full bg-black h-[0.2vh]"></div>
    </div>
  );
};

export default Header;
