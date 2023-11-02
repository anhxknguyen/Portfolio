import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const BackToExperience = () => {
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
      className="text-lg cursor-pointer w-fit lg:text-xl lg:hover:font-neueItalic"
    >
      <NavLink to="/experience">{`<`} back to experience</NavLink>
    </motion.div>
  );
};

export default BackToExperience;
