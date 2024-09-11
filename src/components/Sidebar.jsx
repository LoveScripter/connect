import React from "react";
import { BiSearch } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="flex justify-end w-[30vw] h-screen sticky top-0 left-0 z-40">
      <div className="flex flex-col w-full">
        <div className="flex relative justify-center py-4">
        <input
          className="bg-[rgb(14,18,24)] w-[80%] h-11 rounded-3xl px-6 flex items-center"
          type="search"
          name="search"
          id="search"
          placeholder="Search"
        />
        </div>
        <label className="absolute text-[rgb(22,29,38)]" htmlFor="search">
          <BiSearch />
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
