import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";

const WorkHardPlayHard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <BackToProjects />
      Work Hard Play Hard (work in progress)
    </motion.div>
  );
};

export default WorkHardPlayHard;
