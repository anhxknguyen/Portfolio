import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-col items-end text-2xl text-justify sm:text-3xl gap-9 lg:text-4xl text-darkGray">
      <NavLink to="/about" className="cursor-pointer hover:font-neueItalic">
        about
      </NavLink>
      <NavLink
        to="/experience"
        className="cursor-pointer hover:font-neueItalic"
      >
        experience
      </NavLink>
      <NavLink to="/projects" className="cursor-pointer hover:font-neueItalic">
        projects
      </NavLink>
      <a
        href="https://docs.google.com/document/d/1p1f22OXrYou-1p4IpKejgsry93xPE-Ffnx1AtQm1MOE/edit?usp=sharing"
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
