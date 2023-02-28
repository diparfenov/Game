import React from "react";
import logo from "./images/black_logo_GuideDAO.svg"

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.guidedao.xyz/" rel="noreferrer" target='_blank'>
        <img src={logo} alt='GuideDAO' /></a>
      <p>-2023-</p>
    </div>
  );
}
