import React from "react";
import HomeButton from "../Components/HomeButton";
import { motion } from "framer-motion";

const About = ({ activePage, setPage }) => {
  return (
    <motion.div
      key={activePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <HomeButton setPage={setPage} />
      <div>About Page</div>
    </motion.div>
  );
};

export default About;
