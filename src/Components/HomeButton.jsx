import React from "react";
import { motion } from "framer-motion";

const HomeButton = ({ setPage }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75 }}
      exit="hidden"
      variants={{
        visible: { opacity: 1, transform: "translateX(0px)" },
        hidden: { opacity: 0, transform: "translateX(-20px)" },
      }}
      className="cursor-pointer"
      onClick={() => setPage("Home")}
    >
      {`<`} back to home
    </motion.div>
  );
};

export default HomeButton;
