import React from "react";
import { motion } from "framer-motion";
import HomeButton from "../Components/BackToHome";
import ListLink from "../Components/ListLink";

const Projects = () => {
  return (
    <motion.div className="h-auto overflow-hidden">
      <HomeButton />
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
          className="flex flex-col justify-center gap-2 items-end text-end md:items-center md:text-center msm:pt-10"
        >
          <div className=" md:w-1/3 flex flex-col md:items-center">
            <h1 className="font-neueBold text-base">Projects</h1>
            <p className="">
              A collection of recent programming projects that I have worked on.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.div className="h-full block text-3xl flex flex-col text-end items-end py-10 justify-center md:items-center md:text-5xl gap-10 md:gap-10 no-scrollbar">
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
            >
              <ListLink
                to="workhardplayhard"
                title="Work Hard, Play Hard"
                subtitle="Frontend Javascript Project"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                transform: "translateX(-20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { delay: 0.3, duration: 0.25 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <ListLink
                to="thiswebsite"
                title="Portfolio Website"
                subtitle="Frontend React.js Project"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                transform: "translateX(-20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { delay: 0.4, duration: 0.25 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              {" "}
              <ListLink
                to="streetmapping"
                title="Street Mapping"
                subtitle="Backend Java Project"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                transform: "translateX(-20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { delay: 0.5, duration: 0.25 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <ListLink
                to="huffmancoding"
                title="Huffman Coding"
                subtitle="Backend Java Project"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
