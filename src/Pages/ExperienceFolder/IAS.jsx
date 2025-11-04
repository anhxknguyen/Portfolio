import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience.jsx";
import SubInfo from "../../Components/SubInfo.jsx";
import ml4stem from "../../images/ml4stem/ML4STEM.png";
import tasksGif from "../../images/ml4stem/ml4stem-tasks.gif";
import newFunction from "../../images/ml4stem/newFunction.png";
import updatedUI from "../../images/ml4stem/updatedUI.png";
import ImageModal from "../../Components/ImageModal.jsx";
import useIsMobile from "../../Tools/useIsMobile.js";

const IAS = () => {
  const sections = ["Role", "Skills", "Timeline"];
  const descs = [
    "Product Management Intern",
    "Prompt Engineering, Databricks, JIRA",
    "June 2025 - current",
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
                Integral Ad Science
              </h1>
              <p className="text-md msm:text-lg md:text-xl">
                Automated insights for ad verifcation and optimization
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
            Work in progress...Please check back soon!
          </div>
        </motion.div>
      </div>
      {isImageOpen && !isMobile && (
        <ImageModal image={image} onClose={closeModal} />
      )}
    </div>
  );
};

export default IAS;
