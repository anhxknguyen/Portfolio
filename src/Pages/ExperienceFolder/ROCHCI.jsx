import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import SubInfo from "../../Components/SubInfo";
import ml4stem from "../../images/ml4stem/ML4STEM.png";

const ROCHCI = () => {
  const sections = ["Role", "Skills"];
  const descs = ["Frontend Developer", "React, Redux, LESS"];
  return (
    <div className="mb-24">
      <BackToExperience />
      <div className="flex flex-col items-center justify-center gap-10 pt-6 mt-5 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44 lg:items-start sm:pt-16">
        <div className="w-full">
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
            className="flex flex-col w-full gap-3 xl:flex-row xl:justify-between text-start lg:items-center"
          >
            <div className="flex flex-col w-full gap-2">
              <h1 className="text-4xl font-neueBold sm:text-5xl text-balance">
                Rochester Human-Computer Interaction Lab
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                Promoting AI literacy in K-12 classrooms.
              </p>
            </div>
            <SubInfo sections={sections} descs={descs} />
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
          className="flex flex-col gap-8 sm:text-lg"
        >
          <div className="flex flex-col items-center w-full gap-10 md:gap-16 lg:gap-20">
            <motion.img
              initial={{
                opacity: 0,
                transform: "translateX(20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { delay: 0.2, duration: 0.25, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              className="border rounded-md select-none xl:w-4/5"
              src={ml4stem}
            />
            <p className="leading-relaxed">Work in Progress.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROCHCI;
