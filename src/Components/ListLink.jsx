import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ListLink = ({ to, title, subtitle, year }) => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "translateX(-20px)",
      }}
      animate={{
        opacity: 1,
        transform: "translateX(0px)",
        transition: { delay: 0.2, duration: 0.25 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={to}
        className={`cursor-pointer ${isHovered && "font-neueItalic"}`}
      >
        <h1 className="text-5xl">{title}</h1>
        <h2
          className={`text-sm text-balance ${
            isHovered ? "font-neueBoldItalic" : "font-neueMed"
          }  md:pt-2 `}
        >
          {subtitle} {width < 565 && <br></br>}({year})
        </h2>
      </NavLink>
    </motion.div>
  );
};

export default ListLink;
