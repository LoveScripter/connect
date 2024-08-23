import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-[100%] h-[100%] font-poppins overflow-x-hidden flex flex-row bg-[rgb(31,41,55)]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
