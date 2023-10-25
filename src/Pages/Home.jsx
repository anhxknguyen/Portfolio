import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Contact from "../Components/Contact";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ activePage, setPage }) => {
  return (
    <AnimatePresence>
      {activePage === "Home" && (
        <motion.div className="flex flex-col justify-between items-start font-neueBook h-full w-full">
          <motion.div
            key={"intro"}
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
          >
            <Intro />
          </motion.div>
          <motion.div
            key={"navbar"}
            initial={{ opacity: 0, transform: "translateX(20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
            className="self-end"
          >
            <Navbar activePage={activePage} setPage={setPage} />
          </motion.div>
          <motion.div
            key={"contact"}
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
