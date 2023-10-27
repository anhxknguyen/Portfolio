import React from "react";
import BackToHome from "../Components/buttons/BackToHome";
import ListLink from "../Components/ListLink";
import { motion } from "framer-motion";

const Experience = () => {
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
          className="flex flex-col justify-center gap-2 items-end text-end msm:pt-10"
        >
          <div className="w-1/4sm:w-1/3 flex flex-col">
            <h1 className="font-neueBold text-base sm:text-lg">Experience</h1>
            <p className="text-sm sm:text-base">
              A collection of both collegiate and professional
              programming-related experiences that I have.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.div className="h-full block text-3xl flex flex-col text-end items-end py-10 justify-center md:text-5xl lg:text-7xl gap-10 md:gap-10 no-scrollbar">
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
                to="roclab"
                title="Roclab"
                subtitle="Frontend Developer & UI/UX Designer"
                year="2023 - current"
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
                to="ta"
                title="University of Rochester"
                subtitle="Teaching Assistant"
                year="2023"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
