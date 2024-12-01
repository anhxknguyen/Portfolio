import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import SubInfo from "../../Components/SubInfo";
import ml4stem from "../../images/ml4stem/ML4STEM.png";
import tasksGif from "../../images/ml4stem/ml4stem-tasks.gif";
import newFunction from "../../images/ml4stem/newFunction.png";
import updatedUI from "../../images/ml4stem/updatedUI.png";

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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-10 xl:w-3/5"
            >
              <div className="flex flex-col gap-2">
                {/* OVERVIEW */}
                <h1 className="text-lg font-neueBold md:text-xl">Overview</h1>
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    Over the summer, I worked as a frontend developer for an AI
                    research project at the Rochester Human-Computer Interaction
                    Lab. The project seeked to promote AI literacy in among K-12
                    student and teachers and allow for AI use in the classroom.
                  </p>
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    My personal contributions have included working in
                    cross-functional teams of UX researchers and developers to
                    develop the frontend interface for the MVP of the AI
                    application using React, Redux, and LESS.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-10"
            >
              <hr className="border-zinc-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-10 xl:w-3/5"
            >
              <div className="flex flex-col gap-2">
                {/* OVERVIEW */}
                <h1 className="text-lg font-neueBold md:text-xl">
                  Agile Meetings
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    The project followed an{" "}
                    <span className="text-orange-800 font-neueMed">
                      agile workflow
                    </span>
                    , where we had{" "}
                    <span className="text-orange-800 font-neueMed">
                      weekly sprint meetings{" "}
                    </span>{" "}
                    on Fridays to discuss our progress and goals for the week.
                    As the sole frontend developer over the summer, I also held
                    one-on-one meetings with my product manager to ensure timely
                    completion of frontend deliverables for upcoming sprints.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.img
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              className="object-cover select-none xl:w-4/5"
              src={tasksGif}
            />
            <div className="flex flex-col w-full gap-10 xl:w-3/5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2"
              >
                <div className="flex flex-col gap-2">
                  {/* OVERVIEW */}
                  <h1 className="text-lg font-neueBold md:text-xl">
                    Typical Workflow
                  </h1>
                  <div className="flex flex-col gap-4">
                    <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                      My typical workflow involved{" "}
                      <span className="text-orange-800 font-neueMed">
                        reviewing{" "}
                      </span>{" "}
                      a usability edits document for any new design changes,
                      <span className="text-orange-800 font-neueMed">
                        {" "}
                        implementing{" "}
                      </span>{" "}
                      those updates, and{" "}
                      <span className="text-orange-800 font-neueMed">
                        addressing any challenges{" "}
                      </span>{" "}
                      that arose. If issues occurred, I brought them up during
                      the next agile meeting with the designers and product
                      manager to collaboratively find solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2"
              >
                <div className="flex flex-col gap-2">
                  {/* OVERVIEW */}
                  <h1 className="text-lg font-neueBold md:text-xl">
                    What I Worked On
                  </h1>
                  <div className="flex flex-col gap-4">
                    <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                      The overarching goal over the summer is to update the
                      application to be more intuitive for users to interact
                      with. The bulk of my work included either{" "}
                      <span className="text-orange-800 font-neueMed">
                        updating UI changes{" "}
                      </span>{" "}
                      or{" "}
                      <span className="text-orange-800 font-neueMed">
                        creating new features/components{" "}
                      </span>{" "}
                      to reduce confusion and improve quality of life.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full gap-2 xl:w-3/5"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: {
                    delay: 0.2,
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none"
                src={updatedUI}
              />
              <p className="text-zinc-500 font-neueItalic">
                UPDATED User Interface
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full gap-2 xl:w-3/5"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: {
                    delay: 0.2,
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none"
                src={newFunction}
              />
              <p className="text-zinc-500 font-neueItalic">
                NEW Expanded Window Feature
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full gap-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 my-10"
            >
              <h1 className="text-3xl text-center font-neueBold md:text-5xl">
                Lessons Learned
              </h1>
            </motion.div>
          </motion.div>
          <div className="flex flex-col w-full gap-20 xl:flex-row xl:w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 grow"
            >
              <h1 className="text-2xl text-transparent font-neueBold bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text md:text-3xl">
                Importance of Humility
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                There were some tasks assigned to me that were out of my
                expertise at my current skill level. This experience taught me
                the importance of humility in learning, seeking guidance when
                needed, and embracing opportunities for growth despite initial
                difficulties.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 grow"
            >
              <h1 className="text-2xl text-transparent font-neueBold bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text md:text-3xl">
                State Management Libraries
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                State management libraries like Redux can simplify access to
                certain states and eliminate the need for repetitive prop
                drilling between different React components.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROCHCI;
