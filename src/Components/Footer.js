import React from "react";
import footer from "../Styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={footer.wrapper}>
      <img
        src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189554/s-logo_blh0b0.png"
        alt="logo"
      ></img>
      <h4>Vignesh Sivagnanam</h4>
    </div>
  );
}
