import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-col items-end text-3xl text-justify  gap-9 lg:text-4xl text-darkGray">
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
        href="https://drive.google.com/file/d/1rSDpOF_syC0-vPthkoIms2P765SHumBI/view?usp=sharing"
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
