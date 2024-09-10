import React from "react";
import { BiHome } from "react-icons/bi";
import { BsInbox } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { PiSignIn } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import { Link,Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex justify-start items-start">
          <aside className="sticky top-0 left-0 z-40 h-screen">
            <div className="h-full flex flex-col justify-between px-3 py-4 bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="35"
                      height="35"
                      color="#fff"
                      fill="none"
                    >
                      <path
                        d="M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <Link to='/'>
                    <span className="text-3xl">Connect</span>
                    </Link>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BiHome className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BiSearch className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Explore
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BsInbox className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Inbox
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BiUser className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookmark"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BiBookmark className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Bookmarks
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <PiSignOut className="w-8 h-8" />
                    <span className="text-xl flex-1 ms-3 whitespace-nowrap">
                      Sign Out
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="profile w-[17vw] gap-4 my-6 flex hover:bg-gray-700 items-center transition-colors rounded-full p-3 text-white">
                <div>
                  <img
                    className="h-10 w-10 rounded-full"
                    src=""
                    width={12}
                    height={12}
                    alt="userPic"
                  />
                </div>
                <div className="flex gap-10">
                  <div>
                    <div className="">User</div>
                    <div className="text-gray-500">@Username</div>
                  </div>
                  <div className="text-3xl">...</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default Navbar;
