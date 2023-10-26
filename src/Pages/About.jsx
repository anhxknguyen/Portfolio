import React from "react";
import { motion } from "framer-motion";
import BackToHome from "../Components/Buttons/BackToHome";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <BackToHome />
      <div>About Page</div>
    </motion.div>
  );
};

export default About;
