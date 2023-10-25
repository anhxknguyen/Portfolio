import "./styles/index.css";
import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function Portfolio() {
  //Code from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setViewportHeight();
  window.addEventListener("resize", () => {
    setViewportHeight();
  });
  //Code from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

  const [activePage, setActivePage] = useState("Home");

  const setPage = (page) => {
    setActivePage(page);
  };

  return (
    <div
      className="font-neueBook overflow-scroll no-scrollbar bg-backgroundColor ml-5 mr-2 md:ml-10 md:mr-7
     h-full w-{9/10} border-solid border-2 border-darkGray p-10 shadow-rootShadow gap-0 animate-fadeInFast"
    >
      {activePage === "Home" && (
        <Home activePage={activePage} setPage={setPage} />
      )}
      {activePage === "About" && (
        <About activePage={activePage} setPage={setPage} />
      )}
      {activePage === "Experience" && (
        <Experience activePage={activePage} setPage={setPage} />
      )}
      {activePage === "Projects" && (
        <Projects activePage={activePage} setPage={setPage} />
      )}
    </div>
  );
}

export default Portfolio;
