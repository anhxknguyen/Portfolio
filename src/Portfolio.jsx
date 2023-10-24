import "./styles/index.css";
import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function Portfolio() {
  const [activePage, setActivePage] = useState("Home");

  const setPage = (page) => {
    setActivePage(page);
  };

  return (
    <div
      className="font-neueBook bg-backgroundColor
    p-0 h-ninetyFiveVH w-{9/10} mt-6 mx-6 border-solid border-2 border-darkGray px-10 py-10 gap-0 animate-fadeInFast"
    >
      {activePage === "Home" && <Home setPage={setPage} />}
      {activePage === "About" && <About setPage={setPage} />}
      {activePage === "Experience" && <Experience setPage={setPage} />}
      {activePage === "Projects" && <Projects setPage={setPage} />}
    </div>
  );
}

export default Portfolio;
