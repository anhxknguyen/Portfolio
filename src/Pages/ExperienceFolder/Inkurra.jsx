import React from "react";
import { motion } from "framer-motion";
import SubInfo from "../../Components/SubInfo";
import BackToExperience from "../../Components/buttons/BackToExperience";
import inkurra from "../../images/inkurra/inkurra.png";
import create from "../../images/inkurra/create.png";
import settings from "../../images/inkurra/settings.png";
import view from "../../images/inkurra/view.png";
import { useState, useEffect } from "react";
import useIsMobile from "../../Tools/useIsMobile.js";
import ImageModal from "../../Components/ImageModal.jsx";

const Inkurra = () => {
  const sections = ["Timeline", "Skills"];
  const descs = ["May 2024", "React, Firebase, Figma"];
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
                Inkurra
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                Connecting artists with customers
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
              src={inkurra}
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
                <h1 className="text-lg font-neueBold md:text-xl">
                  Overview + Inspiration
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    I noticed that there are a lot of very talented artists on
                    Twitter who are looking for clients to commission them for
                    work. Therefore, I created Inkurra, a centralized platform
                    for artists to display their work and allow people to
                    commission them.
                  </p>
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    Inkurra was my first ever fullstack project built entirely
                    by myself using React, Tailwind, and Firebase.
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
                  setImage(view);
                  openModal();
                }}
                className="self-center border rounded-md select-none hover:cursor-pointer hover:border-orange-300"
                src={view}
              />
              <p className="text-zinc-500 font-neueItalic">
                View Commission Screen
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
                onClick={(e) => {
                  setImage(create);
                  openModal();
                }}
                className="self-center border rounded-md select-none hover:cursor-pointer hover:border-orange-300"
                src={create}
              />
              <p className="text-zinc-500 font-neueItalic">
                Create Commission Screen
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
                onClick={(e) => {
                  setImage(settings);
                  openModal();
                }}
                className="self-center border rounded-md select-none hover:cursor-pointer hover:border-orange-300"
                src={settings}
              />
              <p className="text-zinc-500 font-neueItalic">Settings Screen</p>
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
                  If I Were To Redo This Project...
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-md sm:text-lg md:text-xl">
                    I would implement a messaging and built in transaction
                    function within the application so that both artists and
                    commissioners can safely communicate and sell/purchase
                    artwork!
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

export default Inkurra;
