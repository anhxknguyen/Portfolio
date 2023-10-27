import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/BackToExperience";

const TA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <BackToExperience />
      Teaching Assistant
    </motion.div>
  );
};

export default TA;
