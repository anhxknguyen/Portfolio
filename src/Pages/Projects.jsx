import React from "react";
import { motion } from "framer-motion";
import BackToHome from "../Components/buttons/BackToHome";
import ListLink from "../Components/ListLink";

const Projects = () => {
  return (
    <motion.div className="h-auto overflow-hidden">
      <BackToHome />
      <div className="overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { delay: 0.1, duration: 0.25 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="flex flex-col items-end justify-center gap-2 text-end msm:pt-10"
        >
          <div className="flex flex-col w-1/4sm:w-1/3">
            <h1 className="text-base font-neueBold sm:text-xl">Projects</h1>
            <p className="text-sm sm:text-lg">
              A collection of recent programming projects that I have worked on.
            </p>
          </div>
        </motion.div>
        <div>
          <motion.div className="flex flex-col items-end justify-center block h-full gap-10 py-10 text-3xl text-end md:text-5xl lg:text-7xl md:gap-10 no-scrollbar">
            <ListLink
              to="inkurra"
              title="Inkurra"
              subtitle="Fullstack React.js & Firebase"
              year="2024"
            />
            <ListLink
              to="thiswebsite"
              title="Portfolio Website"
              subtitle="Frontend React.js"
              year="2023 - current"
            />
            <ListLink
              to="workhardplayhard"
              title="Work Hard, Play Hard"
              subtitle="Frontend Javascript"
              year="2023"
            />

            <ListLink
              to="streetmapping"
              title="Street Mapping"
              subtitle="Backend Java"
              year="2023"
            />

            <ListLink
              to="huffmancoding"
              title="Huffman Coding"
              subtitle="Backend Java"
              year="2023"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
