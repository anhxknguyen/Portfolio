import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/Buttons/BackToProjects";

const HuffmanCoding = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <BackToProjects />
      Huffman Coding
    </motion.div>
  );
};

export default HuffmanCoding;
