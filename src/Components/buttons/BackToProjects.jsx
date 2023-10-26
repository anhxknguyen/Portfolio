import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const BackToProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-20px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
      className="font-neueThin w-fit text-md md:text-lg lg:text-xl cursor-pointer hover:font-neueItalic"
    >
      <NavLink to="/projects">{`<`} back to projects</NavLink>
    </motion.div>
  );
};

export default BackToProjects;
