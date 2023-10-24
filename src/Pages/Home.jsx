import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-between items-start font-neueBook 
    p-0 h-ninetyFiveVH w-{9/10} mt-6 mx-6 border-solid border-2 border-darkGray px-10 py-10 gap-0 animate-fadeInFast"
    >
      <div className="animate-fadeInRightMed">
        <Intro />
      </div>
      <div className="self-end animate-fadeInLeftSlow ">
        <Navbar />
      </div>
      <div className="animate-fadeInRightMed">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
