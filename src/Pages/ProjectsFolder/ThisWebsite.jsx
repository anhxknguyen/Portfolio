import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";

const ThisWebsite = () => {
  return (
    <div>
      <BackToProjects />
      <div className="flex w-full flex-col justify-center items-center lg:items-start mt-5 msm:mt-2 px-5 sm:px-10 lg:mt-0 gap-6 pt-6 sm:pt-16">
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
            className="w-full font-neueBold flex flex-col msm:text-xl sm:text-3xl lg:text-5xl lg:items-start text-center gap-3"
          >
            <h1>Portfolio Website</h1>
            <p className="font-neueBold text-lg text-center lg:text-start sm:text-xl">
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
