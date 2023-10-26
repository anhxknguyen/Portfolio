import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="flex flex-col justify-between items-start font-neueBook h-full w-full">
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
      >
        <Intro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
        className="self-end"
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;
