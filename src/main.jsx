import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio.jsx";
import { HashRouter as BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  </React.StrictMode>,
);
