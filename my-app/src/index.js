import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import MainFrame from "./components/MainFrame.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <MainFrame />
  </React.StrictMode>
);
