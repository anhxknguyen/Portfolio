import React from "react";
import { motion } from "framer-motion";
import studyspaces from "../../images/studyspaces/studyspaces.png";
import lobby from "../../images/studyspaces/lobby.png";
import ingame from "../../images/studyspaces/ingame.png";
import SubInfo from "../../Components/SubInfo";
import BackToExperience from "../../Components/buttons/BackToExperience";
import { useState, useEffect } from "react";
import useIsMobile from "../../Tools/useIsMobile.js";
import ImageModal from "../../Components/ImageModal.jsx";
const StudySpaces = () => {
  const sections = ["Award", "Skills", "Role", "Timeline"];
  const descs = [
    "Best AI App Built With Cloudflare",
    "React, TailwindCSS, Figma",
    "UX Designer & Frontend Developer",
    "24 Hours in March 2024",
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
              <a
                className="w-fit text-amber-500 hover:text-orange-500"
                href="https://devpost.com/software/study-spaces-gj7t3k#updates"
                target="_blank"
                rel="noopener noreferrer"
              >
                Checkout our Devpost here &rarr;
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
              src={studyspaces}
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
                    Study Spaces is a hackathon project that my team and I did
                    for BrickHackX. The project aimed to utilize AI to gamify
                    learning by parsing PDF documents like textbooks and
                    converting it into an interactive quiz game.
                  </p>
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    My personal contributions included designing and developing
                    the user experience interface of the application.
                  </p>
                </div>
              </div>
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
                onClick={(e) => {
                  setImage(lobby);
                  openModal();
                }}
                className="self-center border rounded-md select-none hover:cursor-pointer hover:border-orange-300"
                src={lobby}
              />
              <p className="text-zinc-500 font-neueItalic">Lobby Screen</p>
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
                onClick={(e) => {
                  setImage(ingame);
                  openModal();
                }}
                className="self-center border rounded-md select-none hover:cursor-pointer hover:border-orange-300"
                src={ingame}
              />
              <p className="text-zinc-500 font-neueItalic">Quiz Game Screen</p>
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
                  Impact + Reflection
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    Our project won
                    <span className="text-orange-800 font-neueMed">
                      {" "}
                      Best AI APP BUILT with Cloudflare{" "}
                    </span>
                    at the hackathon!
                  </p>
                  <p>
                    Given more time to work on the project, our team would've
                    loved to integrate uploading for more file formats beyond
                    PDFs and allow users specify custom quiz query parameters
                    for more customization.
                  </p>
                </div>
              </div>
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

export default StudySpaces;
