import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
         {" "}
      <img
        src="\src\assets\notFound.webp"
        class="absolute h-full w-full object-cover"
      />
          <div class="inset-0 bg-black opacity-25 absolute">    </div>   {" "}
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
               {" "}
        <div class="w-full font-mono flex flex-col items-center relative z-10">
                     {" "}
          <h1 class="font-extrabold text-5xl text-center text-white">
              You are all alone here          {" "}
          </h1>
                     {" "}
          <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
                            404            {" "}
          </p>
                 {" "}
        </div>
           {" "}
      </div>
    </div>
  );
};

export default NotFound;
