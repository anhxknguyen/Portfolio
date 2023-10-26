import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeButton from "../Components/BackToHome";

const Projects = () => {
  return (
    <motion.div className="h-auto overflow-hidden">
      <HomeButton />
      <pre className="w-full h-full overflow-hidden"> </pre>
      <div className="overflow-hidden">
        <div id="sectionLeft"></div>
        <div id="sectionRight">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(-20px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { delay: 0.2, duration: 0.25 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="h-full block text-3xl flex flex-col text-end items-end justify-center md:items-center md:mr-10 md:text-5xl gap-10 md:gap-10 no-scrollbar"
          >
            <NavLink
              to="workhardplayhard"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Work Hard, Play Hard
            </NavLink>
            <NavLink
              to="thiswebsite"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              This Website
            </NavLink>
            <NavLink
              to="streetmapping"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Street Mapping
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
            <NavLink
              to="huffmancoding"
              className="lg:hover:font-neueItalic cursor-pointer"
            >
              Huffman Coding
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
