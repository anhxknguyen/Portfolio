import React from "react";

const Navbar = ({ activePage, setPage }) => {
  return (
    <ul className=" flex flex-col items-end text-justify gap-9 text-3xl lg:text-4xl text-darkGray">
      <a
        onClick={() => setPage("About")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        about
      </a>
      <a
        onClick={() => setPage("Experience")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        experience
      </a>
      <a
        onClick={() => setPage("Projects")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        projects
      </a>
      <a
        href="https://drive.google.com/file/d/1rSDpOF_syC0-vPthkoIms2P765SHumBI/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="transition hover:font-neueItalic cursor-pointer"
      >
        resume
      </a>
    </ul>
  );
};

export default Navbar;
