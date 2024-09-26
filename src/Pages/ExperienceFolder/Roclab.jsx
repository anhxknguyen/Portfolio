/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import SubInfo from "../../Components/SubInfo";
import melSearch from "../../images/melcourses/mel-searchbg.png";
import cdcsOriginal from "../../images/melcourses/cdcs-original.png";
import workdayFlow from "../../images/melcourses/workday-flow.gif";

const Roclab = () => {
  const sections = ["Current Role", "Former Roles", "Timeline", "Skills"];
  const descs = [
    "Product Manager",
    "UX Designer, Frontend Developer",
    "Ongoing",
    "Next, Typescript, Figma",
  ];
  return (
    <div>
      <BackToExperience />
      <div className="flex flex-col items-center justify-center gap-10 pt-6 mt-5 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-32 lg:items-start sm:pt-16">
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
              <h1 className="text-4xl font-neueBold sm:text-5xl">Melcourses</h1>
              <p className="text-md msm:text-lg md:text-xl">
                Designing a solution for seamless course scheduling.
              </p>
              <a
                className="w-fit text-amber-500 hover:text-orange-500"
                href="https://melcourses.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit melcourses here &rarr;
              </a>
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
          <div className="flex flex-col items-center w-full gap-10 md:gap-16 lg:gap-24">
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
              className="select-none xl:w-4/5"
              src={melSearch}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 sm:gap-4 xl:w-4/5"
            >
              <h1 className="text-2xl font-neueBold md:text-4xl">
                Defining the Problem
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                The current user flow for course scheduling on Workday and the
                school's scheduling website is inefficient and unintuitive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 xl:flex-row sm:gap-10"
            >
              <div className="flex flex-col gap-2 p-6 border sm:gap-4 xl:w-1/2 border-lightBlack">
                <h1 className="text-lg sm:text-2xl xl:self-center font-neueBold">
                  UR Course Scheduler
                </h1>
                <motion.img
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  className="object-cover select-none xl:h-335"
                  src={cdcsOriginal}
                />
                <h1 className="text-2xl font-neueMed">Issues:</h1>
                <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                  <li>- Too much information on the screen</li>
                  <li>- UI is outdated and crowded</li>
                  <li>- Confusing to navigate</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 p-6 border border-lightBlack sm:gap-4 xl:w-1/2">
                <h1 className="text-lg sm:text-2xl xl:self-center font-neueBold">
                  Workday
                </h1>
                <motion.img
                  className="object-cover select-none xl:h-335"
                  src={workdayFlow}
                />
                <h1 className="text-2xl font-neueMed">Issues:</h1>
                <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                  <li>- Login required to use Workday</li>
                  <li>- Too many clicks</li>
                  <li>- Confusing to navigate</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roclab;
