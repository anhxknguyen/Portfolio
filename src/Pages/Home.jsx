import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ activePage, setPage }) => {
  return (
    <AnimatePresence>
      {activePage === "Home" && (
        <div className="flex flex-col justify-between items-start font-neueBook h-full w-full">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
          >
            <Intro />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
            className="self-end"
          >
            <Navbar activePage={activePage} setPage={setPage} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Home;
