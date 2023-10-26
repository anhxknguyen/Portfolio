import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HomeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-20px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
      className="font-neueThin w-fit text-lg lg:text-xl cursor-pointer lg:hover:font-neueItalic"
    >
      <NavLink to="/">{`<`} back to home</NavLink>
    </motion.div>
  );
};

export default HomeButton;
