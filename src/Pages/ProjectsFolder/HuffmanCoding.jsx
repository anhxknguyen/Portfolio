import React from "react";
import { motion } from "framer-motion";
import BackToProjects from "../../Components/buttons/BackToProjects";
import SubInfo from "../../Components/SubInfo";

const HuffmanCoding = () => {
  const sections = ["Timeline", "Skills"];
  const descs = ["2 Days", "Java"];
  return (
    <div>
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
                Huffman Coding
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                Encoding and decoding files for seamless compression.
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
        </motion.div>
      </div>
    </div>
  );
};

export default HuffmanCoding;
