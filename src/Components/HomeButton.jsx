import React from "react";
import { motion } from "framer-motion";

const HomeButton = ({ activePage, setPage }) => {
  return (
    <motion.div
      key={activePage}
      initial={{ opacity: 0, transform: "translateX(-20px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
      className="cursor-pointer"
      onClick={() => setPage("Home")}
    >
      {`<`} back to home
    </motion.div>
  );
};

export default HomeButton;
