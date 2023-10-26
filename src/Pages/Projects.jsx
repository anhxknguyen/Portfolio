import React from "react";
import HomeButton from "../Components/buttons/BackToHome";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div className="h-full">
      <HomeButton />
      <motion.div className="h-full flex flex-col justify-center items-center">
        <NavLink
          to="workhardplayhard"
          className=" hover:font-neueItalic cursor-pointer"
        >
          Work Hard, Play Hard
        </NavLink>
        <NavLink
          to="thiswebsite"
          className=" hover:font-neueItalic cursor-pointer"
        >
          This Website
        </NavLink>
        <NavLink
          to="streetmapping"
          className=" hover:font-neueItalic cursor-pointer"
        >
          Street Mapping
        </NavLink>
        <NavLink
          to="huffmancoding"
          className=" hover:font-neueItalic cursor-pointer"
        >
          Huffman Coding
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
