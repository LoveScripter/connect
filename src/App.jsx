import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-[100vw] flex justify-center flex-row">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
