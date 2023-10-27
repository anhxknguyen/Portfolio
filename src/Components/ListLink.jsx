import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ListLink = ({ to, title, subtitle, year }) => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <div>
      <NavLink to={to} className="lg:hover:font-neueItalic cursor-pointer">
        <h1>{title}</h1>
        <h2 className="font-neueBold text-sm msm:text-base md:pt-2">
          {subtitle} {width < 565 && <br></br>}({year})
        </h2>
      </NavLink>
    </div>
  );
};

export default ListLink;
