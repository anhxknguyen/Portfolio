import React from "react";
import Navbar from "../Components/home-components/Navbar";
import Intro from "../Components/home-components/Intro";
import Contact from "../Components/home-components/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="flex flex-col justify-between items-start font-neueBook h-full w-full">
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(-20px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { delay: 0, duration: 0.25 },
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
          transition: { delay: 0.2, duration: 0.25 },
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
          transition: { delay: 0.4, duration: 0.25 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;
