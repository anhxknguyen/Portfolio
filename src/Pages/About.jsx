import React from "react";
import HomeButton from "../Components/HomeButton";

const About = ({ setPage }) => {
  return (
    <div>
      <HomeButton setPage={setPage} />
      About Page
    </div>
  );
};

export default About;
