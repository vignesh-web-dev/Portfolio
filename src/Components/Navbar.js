import React, { useState } from "react";
import nav from "../Styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../store/navbar-slice";
import Social from "./Social";

export default function Navbar() {
  const dispatch = useDispatch();
  const isMenu = useSelector((state) => state.nav.isMenu);
  const menuClick = (e) => {
    dispatch(navbarActions.menu());
  };
  return (
    <div className={nav.wrapper}>
      <a className={nav.link} href="www.google.com">
        <img src="./logo.png" alt="logo"></img>
      </a>
      <div className={nav.deskwrapper}>
        <ul className={nav.list}>
          <li>
            <span className={nav.listspan}>#</span>
            <NavLink className={nav.NavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <span className={nav.listspan}>#</span>
            <NavLink className={nav.NavLink} to="/Works">
              Works
            </NavLink>
          </li>
          <li>
            <span className={nav.listspan}>#</span>
            <NavLink className={nav.NavLink} to="/About">
              About
            </NavLink>
          </li>
          <li>
            <span className={nav.listspan}>#</span>
            <NavLink className={nav.NavLink} to="/Contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={nav.icon}>
        {isMenu && isMenu ? (
          <img
            onClick={menuClick}
            className={nav.menu}
            src="./cancel.png"
            alt="cencel"
          ></img>
        ) : (
          <img
            onClick={menuClick}
            className={nav.cancel}
            src="./menu.png"
            alt="menu"
          ></img>
        )}
      </div>
      {isMenu && (
        <div className={nav.mobileWrap}>
          <ul className={nav.mobList}>
            <li>
              <span className={nav.listspan}>#</span>
              <NavLink className={nav.NavLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <span className={nav.listspan}>#</span>
              <NavLink className={nav.NavLink} to="/Works">
                Works
              </NavLink>
            </li>
            <li>
              <span className={nav.listspan}>#</span>
              <NavLink className={nav.NavLink} to="/About">
                About
              </NavLink>
            </li>
            <li>
              <span className={nav.listspan}>#</span>
              <NavLink className={nav.NavLink} to="/Contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className={nav.socialwrapper}>
            <div className={nav.socialwrapper2}>
              <a href="https://www.linkedin.com/in/vignesh-sivagnanam-43316215a">
                <img src="./Linkedin.svg" alt="linkedin"></img>
              </a>
              <a href="https://github.com/vignesh-web-dev">
                <img src="./Github.svg" alt="Twitter"></img>
              </a>
              <a href="mailto: vickyshiva26@gmail.com">
                <img src="./Email.svg" alt="Email"></img>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
