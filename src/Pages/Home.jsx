import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";

const Home = ({ setPage }) => {
  return (
    <div
      className="flex flex-col justify-between items-start font-neueBook 
     h-full w-{9/10} animate-fadeInFast"
    >
      <div className="animate-fadeInRightMed">
        <Intro />
      </div>
      <div className="self-end animate-fadeInLeftSlow ">
        <Navbar setPage={setPage} />
      </div>
      <div className="animate-fadeInRightMed">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
