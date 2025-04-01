import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <h1 className="text-4xl sm:text-5xl text-darkGray">
        Bon <br /> Nguyen
      </h1>
      <h2 className="text-lg md:text-2xl text-darkGray text-balance">
        Technical Product Manager & Full-Stack Software Engineer
      </h2>
      <h3 className="text-sm text-gray-400 sm:text-lg text-balance">
        (this portfolio website was built using{" "}
        <span className="font-neueMed">React</span>,{" "}
        <span className="font-neueMed">Framer Motion</span>, and{" "}
        <span className="font-neueMed">TailwindCSS</span>!)
      </h3>
    </div>
  );
};

export default Intro;
