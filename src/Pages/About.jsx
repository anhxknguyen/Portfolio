/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToHome from "../Components/buttons/BackToHome";
import profile from "../images/IMG_6474.png";

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
          <h2 className="text-2xl text-center lg:text-start lg:text-3xl">
            I'm Bon Nguyen, a Computer Science Sophomore <br></br>@University of
            Rochester
          </h2>
          <div className="flex flex-col sm:text-lg xl:text-xl gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              vel eros donec ac odio tempor. Diam ut venenatis tellus in metus
              vulputate eu. Quam quisque id diam vel. Et malesuada fames ac
              turpis egestas. Duis at consectetur lorem donec massa. Ante metus
              dictum at tempor commodo ullamcorper a. Tellus in hac habitasse
              platea. Volutpat odio facilisis mauris sit amet massa vitae. Mi
              quis hendrerit dolor magna eget est lorem. Adipiscing bibendum est
              ultricies integer quis auctor elit sed vulputate. Non sodales
              neque sodales ut etiam sit amet nisl purus. Non odio euismod
              lacinia at quis risus sed vulputate odio. Mattis aliquam faucibus
              purus in massa tempor nec feugiat. Arcu non sodales neque sodales
              ut etiam sit amet. In dictum non consectetur a erat nam at lectus.
              Blandit aliquam etiam erat velit scelerisque in.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
