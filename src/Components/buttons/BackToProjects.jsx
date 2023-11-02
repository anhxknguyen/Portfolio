import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const BackToProjects = () => {
  return (
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
      className="cursor-pointer w-fit text-md md:text-lg lg:text-xl lg:hover:font-neueItalic"
    >
      <NavLink to="/projects">{`<`} back to projects</NavLink>
    </motion.div>
  );
};

export default BackToProjects;
