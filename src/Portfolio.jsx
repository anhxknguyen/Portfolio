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
      className="font-neueBook overflow-scroll no-scrollbar bg-backgroundColor mx-10 flex flex-col justify-between items-start
     h-full w-{9/10} border-solid border-2 border-darkGray p-10 shadow-rootShadow gap-0 animate-fadeInFast"
    >
      {activePage === "Home" && <Home setPage={setPage} />}
      {activePage === "About" && <About setPage={setPage} />}
      {activePage === "Experience" && <Experience setPage={setPage} />}
      {activePage === "Projects" && <Projects setPage={setPage} />}
    </div>
  );
}

export default Portfolio;
