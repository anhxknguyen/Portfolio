import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-col items-end gap-16 text-2xl text-justify sm:text-3xl lg:text-4xl text-darkGray">
      <NavLink to="/about" className="cursor-pointer hover:font-neueItalic">
        about
      </NavLink>
      <NavLink
        to="/experience"
        className="cursor-pointer hover:font-neueItalic"
      >
        experience
      </NavLink>
      {/* <NavLink to="/projects" className="cursor-pointer hover:font-neueItalic">
        projects
      </NavLink> */}
      <a
        href="https://drive.google.com/file/d/14xYFN5aAii5PYW-uxHPqEgmagY5WNsmz/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:font-neueItalic"
      >
        resume
      </a>
    </ul>
  );
};

export default Navbar;
