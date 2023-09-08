import React, { useState } from "react";
import nav from "../Styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../store/navbar-slice";
import Social from "./Social";
import { Tooltip } from "react-tooltip";

export default function Navbar() {
  const dispatch = useDispatch();
  const isMenu = useSelector((state) => state.nav.isMenu);
  const menuClick = (e) => {
    dispatch(navbarActions.menu());
  };
  function changeBackground(e) {
    debugger;
  }
  return (
    <div className={nav.wrapper}>
      <div className={nav.innerwrapper}>
        <div className={nav.icon} onClick={menuClick}>
          {isMenu && isMenu ? (
            <img
              className={nav.menu}
              src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/cancel_eznltu.png"
              alt="cencel"
            ></img>
          ) : (
            <img
              className={nav.cancel}
              src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189663/menu_aqnj7c.png"
              alt="menu"
            ></img>
          )}
        </div>
        {isMenu && (
          <div className={nav.mobileWrap}>
            <ul className={nav.mobList}>
              <li>
                <img
                  className={nav.listspan}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694006677/Asset_1list_icon_kdufnz.png"
                  alt="icon"
                ></img>
                <NavLink className={nav.NavLink} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <img
                  className={nav.listspan}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694006677/Asset_1list_icon_kdufnz.png"
                  alt="icon"
                ></img>
                <NavLink className={nav.NavLink} to="/Works">
                  Works
                </NavLink>
              </li>
              <li>
                <img
                  className={nav.listspan}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694006677/Asset_1list_icon_kdufnz.png"
                  alt="icon"
                ></img>
                <NavLink className={nav.NavLink} to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <img
                  className={nav.listspan}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694006677/Asset_1list_icon_kdufnz.png"
                  alt="icon"
                ></img>
                <NavLink className={nav.NavLink} to="/Contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
            <div className={nav.socialwrapper}>
              <div className={nav.socialwrapper2}>
                <a
                  id="LinkedIn"
                  href="https://www.linkedin.com/in/vignesh-sivagnanam-43316215a"
                >
                  <img
                    src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189663/Linkedin_mednwp.svg"
                    alt="linkedin"
                  ></img>
                </a>
                <Tooltip
                  anchorSelect="#LinkedIn"
                  place="top"
                  className={nav.tooltip}
                >
                  LinkedIn
                </Tooltip>
                <a id="Github" href="https://github.com/vignesh-web-dev">
                  <img
                    src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/Github_vxxxv3.svg"
                    alt="Twitter"
                  ></img>
                </a>
                <Tooltip
                  anchorSelect="#Github"
                  place="top"
                  className={nav.tooltip}
                >
                  Github
                </Tooltip>
                <a
                  id="Email"
                  href="mailto: vickyshiva26@gmail.com"
                  onMouseOver={changeBackground}
                >
                  <img
                    src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/Email_bqrlpz.svg"
                    alt="Email"
                  ></img>
                  <Tooltip
                    anchorSelect="#Email"
                    place="top"
                    className={nav.tooltip}
                  >
                    Email
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
