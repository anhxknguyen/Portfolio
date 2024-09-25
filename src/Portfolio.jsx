import "./styles/index.css";
import React from "react";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import StudySpaces from "./Pages/ProjectsFolder/StudySpaces";
import WorkHardPlayHard from "./Pages/ProjectsFolder/WorkHardPlayHard";
import StreetMapping from "./Pages/ProjectsFolder/StreetMapping";
import HuffmanCoding from "./Pages/ProjectsFolder/HuffmanCoding";
import ThisWebsite from "./Pages/ProjectsFolder/PortfolioWebsite";
import Inkurra from "./Pages/ProjectsFolder/Inkurra";
import Roclab from "./Pages/ExperienceFolder/Roclab";
import TA from "./Pages/ExperienceFolder/TA";
import ROCHCI from "./Pages/ExperienceFolder/ROCHCI";

function Portfolio() {
  const location = useLocation();
  return (
    <div
      className="font-neueBook overflow-scroll no-scrollbar bg-backgroundColor ml-5 mr-2 md:ml-10 md:mr-7
     h-full w-{9/10} border-solid border-2 border-darkGray p-3 msm:p-5 md:p-10 shadow-rootShadow gap-0 animate-fadeInFast"
    >
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route exact path="/experience/roclab" element={<Roclab />} />
          <Route exact path="/experience/ta" element={<TA />} />
          <Route exact path="/experience/rochci" element={<ROCHCI />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            exact
            path="/projects/workhardplayhard"
            element={<WorkHardPlayHard />}
          />
          <Route exact path="/projects/studyspaces" element={<StudySpaces />} />
          <Route
            exact
            path="/projects/streetmapping"
            element={<StreetMapping />}
          />
          <Route
            exact
            path="/projects/huffmancoding"
            element={<HuffmanCoding />}
          />
          <Route exact path="/projects/inkurra" element={<Inkurra />} />
          <Route exact path="/projects/thiswebsite" element={<ThisWebsite />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
