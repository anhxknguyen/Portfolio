import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";

const ThisWebsite = () => {
  return (
    <div>
      <BackToProjects />
      <div className="flex flex-col items-center justify-center w-full gap-6 px-0 px-5 pt-6 mt-5 lg:items-start msm:mt-2 sm:px-5 lg:mt-0 sm:pt-16">
        <div>
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
            className="flex flex-col w-full gap-3 text-center font-neueBold msm:text-xl sm:text-3xl lg:text-5xl lg:items-start"
          >
            <h1>Portfolio Website</h1>
            <p className="text-lg text-center font-neueBold lg:text-start sm:text-xl">
              Skills: React,js, TailwindCSS, Framer Motion
            </p>
          </motion.div>
        </div>
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
          className="flex flex-col gap-3 lg:w-2/3 sm:text-lg"
        ></motion.div>
      </div>
    </div>
  );
};

export default ThisWebsite;
