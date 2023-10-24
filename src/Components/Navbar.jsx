import React from "react";

const Navbar = () => {
  return (
    <ul className="font-neueThin flex flex-col items-end text-justify gap-9 text-5xl text-darkGray">
      <a className="transition hover:font-neueItalic">about</a>
      <a className="transition hover:font-neueItalic">experience</a>
      <a className="transition hover:font-neueItalic">projects</a>
      <a className="transition hover:font-neueItalic">resume</a>
    </ul>
  );
};

export default Navbar;
