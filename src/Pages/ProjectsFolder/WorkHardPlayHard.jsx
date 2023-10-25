import React from "react";
import { motion } from "framer-motion";
import HomeButton from "../../Components/HomeButton";

const WorkHardPlayHard = ({ activePage, setPage }) => {
  return (
    <motion.div
      key={activePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <HomeButton setPage={setPage} />
    </motion.div>
  );
};

export default WorkHardPlayHard;
