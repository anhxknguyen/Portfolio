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

  const sections = ["Current Role", "Former Roles", "Skills", "Timeline"];
  const descs = [
    "Data Structures and Algorithms TA",
    "Intro to CS Workshop Leader",
    "Java, Leadership",
    "Spring 2023, Fall 2024, Spring 2025",
  ];
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
                Computer Science Teaching Assistant
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                What better way to learn than through educating?
              </p>
            </div>
            <SubInfo sections={sections} descs={descs} />
          </motion.div>
        </div>
        <motion.section
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
          className="flex flex-col gap-2"
        >
          <h1 className="text-lg font-neueBold md:text-xl">
            Web Development TA (Spring 2025)
          </h1>
          <div className="flex flex-col gap-4 sm:text-lg">
            <p className="leading-relaxed">
              I helped students with web development concepts and technologies
              like{" "}
              <span className="text-orange-800 font-neueMed">
                HTML, CSS, Javascript, and Flask{" "}
              </span>{" "}
              and graded their homework/projects. That was pretty much it for
              this role. 😃
            </p>
          </div>
        </motion.section>
        <motion.section
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
          className="flex flex-col gap-2"
        >
          <h1 className="text-lg font-neueBold md:text-xl">
            Data Structures and Algorithms TA (Fall 2024)
          </h1>
          <div className="flex flex-col gap-4 sm:text-lg">
            <p className="leading-relaxed">
              As a Data Structures and Algorithms Teaching Assistant, my
              responsibilities included{" "}
              <span className="text-orange-800 font-neueMed">
                grading Java programming assignments related to DSA{" "}
              </span>{" "}
              and provide constructive feedback. I also held office hours twice
              a week where I{" "}
              <span className="text-orange-800 font-neueMed">
                guided students through complex DSA concepts{" "}
              </span>
              , clarified doubts, and helped them tackle challenging programming
              problems.
            </p>
            <p>
              My work as a DSA Teaching Assistant not only allowed me to pay it
              forward by teaching others what I have learned from those who came
              before me, but also allowed me to reinforce my understanding of
              core DSA concepts through teaching.
            </p>
          </div>
        </motion.section>
        <motion.section
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
          className="flex flex-col gap-2"
        >
          <h1 className="text-lg font-neueBold md:text-xl">
            Intro to Computer Science Workshop Leader (Spring 2023)
          </h1>
          <div className="flex flex-col gap-4 sm:text-lg">
            <p className="leading-relaxed">
              During my time as a workshop leader, I was responsible for{" "}
              <span className="text-orange-800 font-neueMed">
                leading two groups of 12-15 students{" "}
              </span>{" "}
              in a 75 minutes weekly workshop/recitation session. In these
              sessions, I assisted students in{" "}
              <span className="text-orange-800 font-neueMed">
                solving complex object-oriented programming problems{" "}
              </span>{" "}
              and reviewed key programming concepts in the Java programming
              language.
            </p>
            <p className="leading-relaxed">
              I was also responsible for conducting a semester-long research
              project on how to improve on the effectiveness of the current
              workshop program. I worked alongside Sherry Zhao, a friend and
              fellow TA, to identify whether or not icebreaker activities
              increased student engagement (PS: it does by 15%!).
            </p>

            <p>
              Working as a workshop leader not only allowed me to continue to
              hone my programming and leadership skills, but it also allowed me
              to create valuable bonds with both my students and fellow TAs. I
              have had the honor of leading not one, but two groups of
              hard-working and passionate, aspiring programmers like myself and
              have had the priviledge of working with some of the most talented
              leaders/programmers I had ever met in my group of TAs, some of
              whom I now call friends. If anyone of you are reading this
              (whether you're a student or a fellow workshop TA), thank you for
              making my first real job so memorable!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TA;
