/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToHome from "../Components/buttons/BackToHome";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <div>
      <BackToHome />
      <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-between mt-5 msm:mt-2 lg:mt-0 mx-5 sm:mx-10 lg:mx-20 gap-10 lg:gap-24 items-center pt-6 sm:pt-16">
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: { delay: 0.2, duration: 0.25, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="w-2/3 sm:w-3/5 md:w-2/5 lg:w-1/3 lg:self-start"
          src={profile}
        />
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
          className="flex flex-col items-center lg:items-start gap-5"
        >
          <h1 className="font-neueBold text-3xl lg:text-7xl">About</h1>
          <h2 className="text-lg text-center lg:text-start sm:text-2xl lg:text-3xl">
            I'm Bon Nguyen, an aspiring Software Engineer <br></br>@University
            of Rochester
          </h2>
          <div className="flex flex-col sm:text-lg xl:text-xl gap-3">
            <p className="leading-relaxed">
              Ever since writing my first line of code in my senior year of high
              school, I have been captivated by the infinite possibilities that
              programming has to offer. The idea of being able to create a
              product capable of resolving everyday challenges with nothing but
              my imagination and a computer fascinates me.
            </p>
            <p className="leading-relaxed">
              I am a current sophomore, pursuing a Bachelor's of Science degree
              in Computer Science at the University of Rochester.
            </p>
            <p className="leading-relaxed">
              When I am not at my computer, I enjoy traveling, filmaking, and
              hanging out with friends!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
