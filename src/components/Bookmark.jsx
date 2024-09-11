import React from "react";
import { GrMore } from "react-icons/gr";
import { BiComment } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { useRef } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const BookmarkPage = () => {
  // Example state with bookmarks (You can fetch this from an API)
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: "Bookmark Title 1",
      description: "Short description or preview of the bookmarked content.",
      image: "https://via.placeholder.com/",
    },
    {
      id: 2,
      title: "Bookmark Title 2",
      description: "Another description for a different bookmark.",
      image: "https://via.placeholder.com/",
    },
    {
      id: 3,
      title: "Bookmark Title 3",
      description: "Another description for a different bookmark.",
      image: "https://via.placeholder.com/",
    },
    {
      id: 4,
      title: "Bookmark Title 4",
      description: "Another description for a different bookmark.",
      image: "https://via.placeholder.com/",
    },
    {
      id: 5,
      title: "Bookmark Title 5",
      description: "Another description for a different bookmark.",
      image: "https://via.placeholder.com/",
    },
  ]);

  const optionsToogle = useRef();

  const handleClick = () => {
    if (optionsToogle.current.style.display === "flex") {
      optionsToogle.current.style.display = "none";
    } else {
      optionsToogle.current.style.display = "flex";
    }
  };

  return (
    <>
      <div className="bg-[rgb(31,41,55)] text-gray-100 min-h-screen flex">
        <Navbar />
        <div className="w-[56vw] border-x-2 border-gray-950 pb-5">
          <div className="bg-transparent border-b border-gray-950 flex justify-start w-full h-[12vh] items-center backdrop-blur-lg sticky top-0 z-10">
            <div className="text-4xl font-bold px-4">
              Bookmarks
            </div>
          </div>
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => (
              <div className="flex justify-between mt-4 px-4">
                <div className="flex gap-2">
                  <div>
                    <img
                      className="h-10 w-44 rounded-full"
                      src="https://picsum.photos/10?random=2"
                      width={12}
                      height={12}
                      alt="userPic"
                    />
                  </div>
                  <div>
                    <div>
                      User <span className="text-gray-700">@Username</span>
                    </div>
                    <div className="w-[99%] break-words">
                      <p>{bookmark.description}</p>
                    </div>
                    <div className="my-3">
                      <img
                        className="rounded-2xl"
                        src={bookmark.image}
                        alt="userPic"
                      />
                    </div>
                    <div className="flex justify-between text-xl">
                      <BiComment />
                      <FaRetweet />
                      <BiLike />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#fff"
                        fill="none"
                      >
                        <path
                          d="M7 17L7 13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 17L12 7"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17 17L17 11"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex items-center text-xl">
                        <BiBookmark />
                        <BiShare />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="flex text-2xl items-center relative cursor-pointer"
                    onClick={handleClick}
                  >
                    <GrMore />
                  </div>
                  <ul
                    className="hidden absolute right-[296px] bg-slate-950 w-28 rounded-xl flex-col items-end"
                    ref={optionsToogle}
                  >
                    <li className="font-bold text-lg px-3 py-2 hover:bg-slate-900 w-full rounded-t-xl">
                      {" "}
                      <button>Delete</button>
                    </li>
                    <li className="font-bold text-lg px-3 py-2 hover:bg-slate-900 w-full rounded-b-xl">
                      {" "}
                      <button>Edit</button>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-6">
              No bookmarks yet.
            </div>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default BookmarkPage;
