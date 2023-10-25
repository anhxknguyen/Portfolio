import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FadeInWhenVisible = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75 }}
        exit="hidden"
        variants={{
          visible: { opacity: 1, transform: "translateX(0px)" },
          hidden: { opacity: 0, transform: "translateX(-20px)" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
