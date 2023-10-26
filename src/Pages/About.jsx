import React from "react";
import HomeButton from "../Components/buttons/BackToHome";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <HomeButton />
      <div>About Page</div>
    </motion.div>
  );
};

export default About;
