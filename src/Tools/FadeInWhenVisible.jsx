import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FadeInWhenVisible = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0, transform: "translateX(-20px)" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
