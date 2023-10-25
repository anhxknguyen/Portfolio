import React from "react";

const HomeButton = ({ setPage }) => {
  return (
    <div className="cursor-pointer" onClick={() => setPage("Home")}>
      {`<`} back to home
    </div>
  );
};

export default HomeButton;
