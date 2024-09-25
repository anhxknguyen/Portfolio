/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import { useState } from "react";
import SubInfo from "../../Components/SubInfo";

const TA = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    if (width <= 1184) {
      document.getElementById("csc-title").style.fontSize = "1.875rem";
    } else {
      document.getElementById("csc-title").style.fontSize = "3rem";
    }
  });

  const sections = ["Current Role", "Former Roles", "Skills"];
  const descs = [
    "Data Structures and Algorithms TA",
    "Intro to CS Workshop Leader",
    "Java, Leadership",
  ];
  return (
    <div>
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
              <h1 className="text-4xl font-neueBold sm:text-5xl">
                Computer Science Teaching Assistant
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                What better way to learn than through educating?
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
          <p className="leading-relaxed">
            During my time as a workshop TA, I was responsible for leading two
            groups of 12-15 students in a 75 minutes weekly workshop/recitation
            session. In these sessions, I assisted students in solving complex
            object-oriented programming problems and reviewed key programming
            concepts in the Java programming language.
          </p>
          <p className="leading-relaxed">
            As a workshop TA, I was also responsible for conducting a
            semester-long research project on how to improve on the
            effectiveness of the current workshop program. I worked alongside
            Sherry Zhao, a friend and fellow workshop TA, to identify whether or
            not icebreaker activities increased student engagement. You can read
            more about it here:{" "}
            <a
              className="text-amber-500 hover:text-orange-500"
              href="https://sites.google.com/u.rochester.edu/icebreakers/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workshop Research Project
            </a>
          </p>
          <p>
            Working as a workshop TA not only allowed me to continue to hone my
            programming and leadership skills, but it also allowed me to create
            valuable bonds with both my students and fellow TAs. I have had the
            honor of leading not one, but two groups of hard-working and
            passionate, aspiring programmers like myself and have had the
            priviledge of working with some of the most talented
            leaders/programmers I had ever met in my group of workshop TAs, some
            of whom I now call friends. If anyone of you are reading this
            (whether you're a student or a fellow workshop TA), thank you for
            making my first real job so memorable!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TA;
