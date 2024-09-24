import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";
import studyspaces from "../../images/studyspaces.png";

const StudySpaces = () => {
  return (
    <div>
      <BackToProjects />
      <div className="flex flex-col items-center justify-center gap-10 pt-6 mt-5 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44 lg:items-start sm:pt-16">
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
            className="flex flex-col w-full gap-3 text-center lg:text-start font-neueBold msm:text-xl sm:text-3xl lg:text-5xl lg:items-start"
          >
            <h1>Study Spaces</h1>
            <p className="text-lg text-center font-neueMed lg:text-start sm:text-xl">
              Skills: React.js, TailwindCSS, Figma
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
          <p className="leading-relaxed">
            During my time as a workshop TA, I was responsible for leading two
            groups of 12-15 students in a 75 minutes weekly workshop/recitation
            session. In these sessions, I assisted students in solving complex
            object-oriented programming problems and reviewed key programming
            concepts in the Java programming language.
          </p>
          <p className="leading-relaxed">
            During my time as a workshop TA, I was responsible for leading two
            groups of 12-15 students in a 75 minutes weekly workshop/recitation
            session. In these sessions, I assisted students in solving complex
            object-oriented programming problems and reviewed key programming
            concepts in the Java programming language.
          </p>
          <p className="leading-relaxed">
            During my time as a workshop TA, I was responsible for leading two
            groups of 12-15 students in a 75 minutes weekly workshop/recitation
            session. In these sessions, I assisted students in solving complex
            object-oriented programming problems and reviewed key programming
            concepts in the Java programming language.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StudySpaces;
