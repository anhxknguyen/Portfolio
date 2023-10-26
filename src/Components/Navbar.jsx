import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className=" flex flex-col items-end text-justify gap-9 text-3xl lg:text-4xl text-darkGray">
      <NavLink to="/about" className="hover:font-neueItalic cursor-pointer">
        about
      </NavLink>
      <NavLink
        to="/experience"
        className="hover:font-neueItalic cursor-pointer"
      >
        experience
      </NavLink>
      <NavLink to="/projects" className="hover:font-neueItalic cursor-pointer">
        projects
      </NavLink>
      <NavLink
        href="https://drive.google.com/file/d/1rSDpOF_syC0-vPthkoIms2P765SHumBI/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="hover:font-neueItalic cursor-pointer"
      >
        resume
      </NavLink>
    </ul>
  );
};

export default Navbar;
