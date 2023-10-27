import React from "react";
import { NavLink } from "react-router-dom";

const ListLink = ({ to, title, subtitle }) => {
  return (
    <div>
      <NavLink to={to} className="lg:hover:font-neueItalic cursor-pointer">
        <h1>{title}</h1>
        <h2 className="font-neueBold text-sm msm:text-base md:text-center md:pt-2">
          {subtitle}
        </h2>
      </NavLink>
    </div>
  );
};

export default ListLink;
