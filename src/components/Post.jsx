import React from "react";
import { CgMore } from "react-icons/cg";
import { BiComment } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { useRef } from "react";

const Post = () => {
  const optionsToogle = useRef();

  const handleClick = () => {
    if ((optionsToogle.current.style.display === "flex")) {
      optionsToogle.current.style.display = "none";
    } else {
      optionsToogle.current.style.display = "flex";
    }
  };

  return (
    <>
      <div className="flex p-5 items-center w-[60vw] hover:bg-[rgb(35,46,61)] transition-all">
        <div className="flex justify-between">
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
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro repellendus ea enim maiores animi consequuntur alias
                  nobis quia, repudiandae veritatis aut quos, laborum hic harum
                  ipsam reiciendis tempore inventore illo dicta? Incidunt
                  deleniti perspiciatis nemo eum quo natus, optio eveniet
                  commodi eos temporibus veniam est corporis, maiores qui
                  officia sequi aliquam, perferendis eaque inventore nobis.
                </p>
              </div>
              <div className="my-3">
                <img
                  className="rounded-2xl"
                  src="https://picsum.photos/700/500?random=2"
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
              className="flex text-3xl relative cursor-pointer"
              onClick={handleClick}
            >
              <CgMore />
            </div>
            <ul
              className="hidden absolute right-[296px] bg-slate-950 w-28 rounded-xl flex-col items-end"
              ref={optionsToogle}
            >
              <li className="font-bold text-lg px-3 py-2 hover:bg-slate-900 w-full rounded-t-xl"> <button>Delete</button></li>
              <li className="font-bold text-lg px-3 py-2 hover:bg-slate-900 w-full rounded-b-xl"> <button>Edit</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
