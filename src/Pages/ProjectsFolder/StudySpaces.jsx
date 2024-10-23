import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";
import studyspaces from "../../images/studyspaces.png";
import SubInfo from "../../Components/SubInfo";

const StudySpaces = () => {
  const sections = ["Award", "Skills", "Role", "Timeline"];
  const descs = [
    "Best AI App Built With Cloudflare",
    "React, TailwindCSS, Figma",
    "UX Designer & Frontend Developer",
    "24 Hours",
  ];
  return (
    <div className="mb-24">
      <BackToProjects />
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
                Study Spaces
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                Gamifying Learning — turning study into play.
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
            className="w-full select-none lg:self-start"
            src={studyspaces}
          />
          <p className="leading-relaxed">Work in Progress.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StudySpaces;
