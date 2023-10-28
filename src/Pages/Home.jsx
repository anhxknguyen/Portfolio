import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";
import monkey from "../images/monkey.gif";

const Home = () => {
  return (
    <motion.div className="flex flex-col justify-between items-start font-neueBook h-full w-full">
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.05,
          transition: { delay: 0.6, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        src={monkey}
        alt="icon"
        className="fixed w-1/2 select-none sm:w-40 md:w-30 lg:w-1/5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(-20px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { delay: 0, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <Intro />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(20px)",
        }}
        viewport={{ once: true }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="self-end"
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(20px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { delay: 0.4, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;
