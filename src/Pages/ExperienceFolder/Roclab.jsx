import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/BackToExperience";

const Roclab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <BackToExperience />
      Roclab
    </motion.div>
  );
};

export default Roclab;
