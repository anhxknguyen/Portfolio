/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToHome from "../Components/buttons/BackToHome";
import profile from "../images/profile3.jpg";

const About = () => {
  return (
    <div className="mb-24">
      <BackToHome />
      <div className="flex flex-col items-center justify-center gap-10 pt-6 mx-0 mt-5 xl:flex-row-reverse xl:justify-between msm:mt-2 xl:mt-0 sm:mx-10 xl:mx-20 xl:gap-24 sm:pt-16">
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
          className="w-2/3 rounded-md select-none sm:w-3/5 md:w-2/5 xl:w-1/3 xl:self-start"
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
          className="flex flex-col items-center gap-3 lg:gap-5 lg:items-start"
        >
          <h1 className="text-3xl font-neueBold lg:text-7xl">About</h1>
          <h2 className="text-lg text-start lg:text-start sm:text-2xl lg:text-3xl">
            I'm Bon Nguyen, an aspiring{" "}
            <span className="text-orange-800 font-neueMed">
              Product Manager and Software Engineer{" "}
            </span>
            @University of Rochester
          </h2>
          <div className="flex flex-col gap-3 sm:text-lg xl:text-xl">
            <p className="leading-relaxed">
              Ever since writing my first line of code in my senior year of high
              school, I have been captivated by the infinite possibilities that
              programming and technology has to offer. The idea of being able to
              create a product capable of resolving everyday challenges with
              nothing but a product idea and a computer fascinates me.
            </p>
            <p className="leading-relaxed">
              My current favorite frontend frameworks are{" "}
              <span className="text-orange-800 font-neueMed">
                Next.js, React.js, and TailwindCSS
              </span>
              ; I have used these frameworks extensively to create and work on
              many projects, including this portfolio website!
            </p>
            <p className="leading-relaxed">
              When I am not at my computer, I enjoy traveling, rock climbing,
              and playing pickleball!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
