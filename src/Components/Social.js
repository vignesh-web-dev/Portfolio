import React from "react";
import social from "../Styles/Social.module.css";
// import Tooltip from "@mui/material/Tooltip";
import { Tooltip } from "react-tooltip";

export default function Social() {
  return (
    <div className={social.wrapper}>
      <div className={social.line}></div>

      <a
        id="LinkedInS"
        href="https://www.linkedin.com/in/vignesh-sivagnanam-43316215a"
        target="blank"
      >
        <img
          src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189663/Linkedin_mednwp.svg"
          alt="linkedin"
        ></img>
      </a>
      <Tooltip
        anchorSelect="#LinkedInS"
        place="right"
        className={social.tooltip}
      >
        LinkedIn
      </Tooltip>

      <a id="GithubS" href="https://github.com/vignesh-web-dev" target="blank">
        <img
          src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/Github_vxxxv3.svg"
          alt="Github"
        ></img>
      </a>
      <Tooltip anchorSelect="#GithubS" place="right" className={social.tooltip}>
        Github
      </Tooltip>

      <a id="EmailS" href="mailto: vickyshiva26@gmail.com">
        <img
          src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/Email_bqrlpz.svg"
          alt="Email"
        ></img>
      </a>
      <Tooltip anchorSelect="#EmailS" place="right" className={social.tooltip}>
        Email
      </Tooltip>
    </div>
  );
}
