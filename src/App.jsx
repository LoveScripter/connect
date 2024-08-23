import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-[100%] h-[100%] relative font-poppins flex flex-row bg-[rgb(31,41,55)]">
      <Navbar />
      <Hero className="flex justify-center" />
    </div>
  );
};

export default App;
