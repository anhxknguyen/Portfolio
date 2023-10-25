import React from "react";
import HomeButton from "../Components/HomeButton";
import { AnimatePresence } from "framer-motion";

const About = ({ setPage }) => {
  return (
    <AnimatePresence>
      <HomeButton setPage={setPage} />
      <div>About Page</div>
    </AnimatePresence>
  );
};

export default About;
