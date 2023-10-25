import React from "react";
import HomeButton from "../Components/HomeButton";

const Projects = ({ setPage }) => {
  return (
    <div>
      <HomeButton setPage={setPage} />
      <a
        onClick={() => setPage("WorkHardPlayHard")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        WorkHardPlayHard
      </a>
    </div>
  );
};

export default Projects;
