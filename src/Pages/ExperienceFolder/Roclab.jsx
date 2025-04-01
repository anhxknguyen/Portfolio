/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import SubInfo from "../../Components/SubInfo";
import melSearch from "../../images/melcourses/mel-searchbg.png";
import cdcsOriginal from "../../images/melcourses/cdcs-original.png";
import workdayFlow from "../../images/melcourses/workday-flow.gif";
import affinityDiagram from "../../images/melcourses/affinityDiagram.png";
import lowFidel1 from "../../images/melcourses/lowfidel-1.png";
import lowFidel2 from "../../images/melcourses/lowfidel-2.png";
import hiFidel1 from "../../images/melcourses/hifidel-1.png";
import hiFidel2 from "../../images/melcourses/hifidel-2.png";
import searchFlow from "../../images/melcourses/search-flow.png";
import interview1 from "../../images/melcourses/interview-1.png";
import interview2 from "../../images/melcourses/interview-2.png";
import ImageModal from "../../Components/ImageModal";
import useIsMobile from "../../Tools/useIsMobile.js";

const Roclab = () => {
  const sections = ["Current Role", "Former Roles", "Timeline", "Skills"];
  const descs = [
    "Product Manager",
    "UX Designer, Frontend Developer",
    "2023 - current",
    "Next, Typescript, Docker, Figma",
  ];
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [image, setImage] = useState(null);
  const isMobile = useIsMobile();

  const openModal = () => {
    setIsImageOpen(true);
  };

  const closeModal = () => {
    setIsImageOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setImage(null);
      setIsImageOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="mb-24">
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
              <h1 className="text-4xl font-neueBold sm:text-5xl text-balance">
                Melcourses
              </h1>
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
              src={melSearch}
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
                    Melcourses was developed as a tool for students to
                    intuitively explore and schedule courses offered at the
                    University of Rochester. It was created as part of Roclab, a
                    student-run organization focused on solving campus problems
                    through software solutions.
                  </p>
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    My personal contributions have included leading user
                    research, prototyping and developing design solutions for
                    the course search page, and overseeing cross-functional team
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* IMPACT */}
                <h1 className="text-lg font-neueBold md:text-xl">Impact</h1>
                <div className="flex gap-4">
                  <h2 className="flex flex-col gap-2 text-xl msm:text-2xl text-amber-600 xl:text-3xl font-neueMed md:font-neueBold">
                    <div>&rarr; 1200+ Registered Users</div>
                    <div>&rarr; Received $3500+ in Endorsement & Funding</div>
                  </h2>
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
            {/* DEFINING PROBLEM */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 xl:w-3/5"
            >
              <h1 className="text-lg font-neueBold md:text-xl">
                Defining the Problem
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                The{" "}
                <span className="text-orange-800 font-neueMed">
                  current user flow{" "}
                </span>
                for course scheduling on Workday and the university's native
                platform (CDCS) is
                <span className="text-orange-800 font-neueMed">
                  {" "}
                  inefficient and unintuitive.
                </span>
              </p>
            </motion.div>
            {/* COMPARING CDCS AND WORKDAY */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 xl:flex-row sm:gap-10"
            >
              {/* CDCS */}
              <div className="flex flex-col gap-2 p-4 border rounded-md bg-backgroundCard sm:p-6 sm:gap-4 xl:w-1/2">
                <h1 className="text-lg sm:text-2xl xl:self-center font-neueBold">
                  UR Native Platform (CDCS)
                </h1>
                <motion.img
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  className="object-cover select-none xl:h-335 hover:cursor-pointer hover:border hover:border-orange-300"
                  onClick={(e) => {
                    setImage(cdcsOriginal);
                    openModal();
                  }}
                  src={cdcsOriginal}
                />
                <div className="flex flex-col gap-6">
                  <section className="text-green-700">
                    <h1 className=" lg:text-2xl font-neueMed">Strengths:</h1>
                    <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                      <li>
                        Data is constantly maintained and updated by the
                        University
                      </li>
                    </ul>
                  </section>
                  <section className="text-red-900">
                    <h1 className="lg:text-2xl font-neueMed">Weaknesses:</h1>
                    <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                      <li>Too much information on the screen</li>
                      <li>UI is outdated and crowded</li>
                      <li>Lacks a scheduling feature</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* WORKDAY */}
              <div className="flex flex-col gap-2 p-4 border rounded-md bg-backgroundCard sm:p-6 sm:gap-4 xl:w-1/2">
                <h1 className="text-lg sm:text-2xl xl:self-center font-neueBold">
                  Workday
                </h1>
                <motion.img
                  className="object-cover select-none xl:h-335 hover:cursor-pointer hover:border hover:border-orange-300"
                  onClick={(e) => {
                    setImage(workdayFlow);
                    openModal();
                  }}
                  src={workdayFlow}
                />
                <div className="flex flex-col gap-6">
                  <section className="text-green-700">
                    <h1 className=" lg:text-2xl font-neueMed">Strengths:</h1>
                    <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                      <li>Course search page is intuitive to use</li>
                      <li>
                        Card format is compact and allows for easy scanning
                      </li>
                    </ul>
                  </section>
                  <section className="text-red-900">
                    <h1 className="lg:text-2xl font-neueMed">Weaknesses:</h1>
                    <ul className="leading-relaxed font-neueMed text-md sm:text-lg md:text-xl">
                      <li>Login required to use Workday</li>
                      <li>Requires too many actions to add/save courses</li>
                      <li>Lectures and workshops/labs are not grouped</li>
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
            {/* UNDERSTANDING PAIN POINTS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full gap-2 xl:w-3/5"
            >
              <h1 className="text-lg font-neueBold md:text-xl">
                Understanding User Pain Points
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                We conducted a series of needfinding interviews, employing
                strategies like{" "}
                <span className="text-orange-800 font-neueMed">
                  user interviews
                </span>
                {", and "}
                <span className="text-orange-800 font-neueMed">
                  contextual inquiries
                </span>{" "}
                with students to understand what they liked and disliked about
                the current course scheduling process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center w-3/5 gap-5 xl:flex-row"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
                onClick={(e) => {
                  setImage(interview1);
                  openModal();
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: { delay: 0.2, duration: 0.25, ease: "easeInOut" },
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-300"
                src={interview1}
              />
              <motion.img
                initial={{
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
                onClick={(e) => {
                  setImage(interview2);
                  openModal();
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: { delay: 0.2, duration: 0.25, ease: "easeInOut" },
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-300"
                src={interview2}
              />
            </motion.div>
            <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
              Afterwards, we mapped our findings into an{" "}
              <span className="text-orange-800 font-neueMed">
                affinity diagram
              </span>
              .
            </p>
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
              onClick={(e) => {
                setImage(affinityDiagram);
                openModal();
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              className="self-center border rounded-md select-none xl:w-3/5 hover:cursor-pointer hover:border-orange-300"
              src={affinityDiagram}
            />
            <div className="flex flex-col w-full gap-10 xl:w-3/5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2"
              >
                <h1 className="text-lg font-neueBold md:text-xl">
                  Key Takeaways{" "}
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  &rarr; Students feel{" "}
                  <span className="text-orange-800 font-neueMed">
                    overwhelmed
                  </span>{" "}
                  by the amount of information on the screen.
                </p>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  &rarr; The layout is{" "}
                  <span className="text-orange-800 font-neueMed">
                    too unorganized
                  </span>{" "}
                  and{" "}
                  <span className="text-orange-800 font-neueMed">
                    difficult to navigate
                  </span>
                  .
                </p>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  &rarr; Students want more{" "}
                  <span className="text-orange-800 font-neueMed">
                    filtering options
                  </span>{" "}
                  that are{" "}
                  <span className="text-orange-800 font-neueMed">
                    easy to use
                  </span>
                  .
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2"
              >
                <h1 className="text-lg font-neueBold md:text-xl">
                  User Flow Diagram
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  A greater understanding of our user's needs allowed me to
                  draft up a{" "}
                  <span className="text-orange-800 font-neueMed">
                    user flow diagram
                  </span>{" "}
                  for the search page that would guide our design process.
                </p>
              </motion.div>
            </div>
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
              onClick={(e) => {
                setImage(searchFlow);
                openModal();
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              className="self-center border rounded-md select-none xl:w-4/5 hover:cursor-pointer hover:border-orange-300"
              src={searchFlow}
            />
            {/* LOW FIDELITY PROTOTYPES */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2 xl:w-3/5"
            >
              <h1 className="text-lg font-neueBold md:text-xl">
                Low Fidelity Prototypes
              </h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                Taking both the strengths and weaknesses of Workday and CDCS
                into account, we drafted up a
                <span className="text-orange-800 font-neueMed">
                  {" "}
                  low fidelity prototype{" "}
                </span>
                of the course search page based on our research findings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center w-full gap-5 xl:flex-row"
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
                onClick={(e) => {
                  setImage(lowFidel1);
                  openModal();
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-500"
                src={lowFidel1}
              />
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
                onClick={(e) => {
                  setImage(lowFidel2);
                  openModal();
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-500"
                src={lowFidel2}
              />
            </motion.div>
            <div className="flex flex-col w-full gap-10 xl:w-3/5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 "
              >
                <h1 className="text-lg font-neueBold md:text-xl">
                  User Feedback
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  We conducted{" "}
                  <span className="text-orange-800 font-neueMed">
                    usability tests
                  </span>{" "}
                  with our low fidelity design and found that users preferred
                  having the "Add to Schedule" button on the course card itself
                  to quickly add without having to expand the card.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 "
              >
                <h1 className="text-lg font-neueBold md:text-xl">
                  Technical Limitations of Design
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  We also found that it was technically impossible to{" "}
                  <span className="text-orange-800 font-neueMed">
                    dynamically scrape major/minor/cluster data
                  </span>{" "}
                  from the University's database without having to manually
                  input the data.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 "
              >
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  Based on the feedback from our low fidelity prototype and our
                  technical limitations, we moved the "Add to Schedule" button
                  to the top of the course card and got rid of the
                  major/minor/cluster information for our{" "}
                  <span className="text-orange-800 font-neueMed">
                    high fidelity prototype
                  </span>
                  .
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center w-full gap-5 xl:flex-row"
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
                onClick={(e) => {
                  setImage(hiFidel1);
                  openModal();
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-500"
                src={hiFidel1}
              />
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
                onClick={(e) => {
                  setImage(hiFidel2);
                  openModal();
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="self-center border rounded-md select-none xl:w-1/2 hover:cursor-pointer hover:border-orange-500"
                src={hiFidel2}
              />
            </motion.div>
            <div className="flex flex-col w-full gap-10 xl:w-3/5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 "
              >
                <h1 className="text-lg font-neueBold md:text-xl">
                  Development
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  After the high fidelity prototype was finalized, we began
                  building the frontend Melcourses using{" "}
                  <span className="text-orange-800 font-neueMed">Next.js</span>{" "}
                  and{" "}
                  <span className="text-orange-800 font-neueMed">
                    Typescript
                  </span>
                  . I personally worked on the{" "}
                  <span className="text-orange-800 font-neueMed">
                    frontend development of the course card components
                  </span>{" "}
                  as well as minor bug fixes to the user interface.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 "
              >
                <h1 className="text-lg font-neueBold md:text-xl">Launch!</h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                  After a long couple of months of development, we finally
                  launched{" "}
                  <span className="text-blue-400 font-neueBold">
                    Melcourses
                  </span>{" "}
                  to the University of Rochester community. We received over{" "}
                  <span className="text-orange-800 font-neueMed">
                    1200+ registered users
                  </span>{" "}
                  within the first 2 months of launch and have received very
                  positive response from students in our university.
                </p>
              </motion.div>
            </div>
            {/* LESSONS LEARNED SECTION */}
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
                className="flex flex-col w-full gap-2"
              >
                <h1 className="text-3xl text-center font-neueBold md:text-5xl">
                  Lessons Learned
                </h1>
              </motion.div>
            </motion.div>
            <div className="flex flex-col w-full gap-10 xl:flex-row xl:w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-full gap-2 grow"
              >
                <h1 className="text-2xl text-transparent font-neueBold bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text md:text-3xl">
                  Research is Key.
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                  Conducting user research thoroughly before design is key to
                  ensuring a user-centered product and a faster
                  design/development process.
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
                  Adapt to Limitations.
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                  Not all ideas are feasible. It's important to adapt to
                  technical limitations and find creative solutions to work
                  around them.
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
                  I &#10084; Design Systems!
                </h1>
                <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                  Having an established design system makes both the design and
                  development process so much more efficient!
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2 xl:w-3/5"
            >
              <h1 className="text-lg font-neueBold md:text-xl">Currently...</h1>
              <p className="leading-relaxed text-md sm:text-lg md:text-2xl">
                I am working as a{" "}
                <span className="text-orange-800 font-neueMed">
                  Product Manager
                </span>{" "}
                for Melcourses, overseeing the design and development of the new
                cluster search engine feature as well as maintaining the current
                website to ensure a seamless user experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {isImageOpen && !isMobile && (
        <ImageModal image={image} onClose={closeModal} />
      )}
    </div>
  );
};

export default Roclab;
