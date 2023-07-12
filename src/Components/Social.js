import React from "react";
import social from "../Styles/Social.module.css";

export default function Social() {
  return (
    <div className={social.wrapper}>
      <div className={social.line}></div>
      <a
        href="https://www.linkedin.com/in/vignesh-sivagnanam-43316215a"
        target="blank"
      >
        <img src="/Linkedin.svg" alt="linkedin"></img>
      </a>
      <a href="https://github.com/vignesh-web-dev" target="blank">
        <img src="/Github.svg" alt="Twitter"></img>
      </a>
      <a href="mailto: vickyshiva26@gmail.com">
        <img src="/Email.svg" alt="Email"></img>
      </a>
    </div>
  );
}
