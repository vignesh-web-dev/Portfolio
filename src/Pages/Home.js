import React from "react";
import home from "../Styles/Home.module.css";
import Footer from "../Components/Footer";
import ExamplePdf from "../assets/VigneshSivagnanam.pdf";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import HomeSection2 from "../Sections/HomeSection2";

export default function Home() {
  return (
    <>
      <section className={home.Section}>
        <div className={home.wrapper1}>
          <div className={home.textDiv}>
            <h2>
              Hello! I'm{" "}
              <span className={home.nameSpan}>Vignesh Sivagnanam</span>{" "}
            </h2>
            <p className={home.tagline}>
              Bringing Websites to Life with Code and Creativity
            </p>
            <p>
              a Indian-based Frontend Developer and Graphic Designer passionate
              about creating engaging and user-friendly web experiences.
            </p>
            <a
              href={ExamplePdf}
              download="Vignesh-Sivagnanam"
              target="_blank"
              rel="noreferrer"
            >
              <button className={home.resumeButton}>Download my Resume</button>
            </a>
            {/* <div className={home.logos}>
              <div className={home.logoSlide}>
                <img
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/html_ashz2r.png"
                  alt=""
                ></img>
                <img
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189662/css_cdpdcn.png"
                  alt=""
                ></img>
                <img
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189663/javascript_kzefdw.png"
                  alt=""
                ></img>
                <img
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189943/react_vvd7sv.png"
                  alt=""
                ></img>
                <img
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189662/illustrator_sqhqt2.png"
                  alt=""
                ></img>
              </div>
            </div> */}
          </div>
          <div className={home.imgDiv}>
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189661/html_ashz2r.png"
                alt=""
              ></img>
              {/* <p className={home.imgDivBottomText1}>VIGNESH SIVAGNANAM</p>
              <p className={home.imgDivBottomText2}>Frontend Developer</p> */}
            </div>
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189662/css_cdpdcn.png"
                alt=""
              ></img>
            </div>
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189663/javascript_kzefdw.png"
                alt=""
              ></img>
            </div>
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189943/react_vvd7sv.png"
                alt=""
              ></img>
            </div>
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690189662/illustrator_sqhqt2.png"
                alt=""
              ></img>
            </div>
            {/* <div className={home.imgDivBG}></div> */}
          </div>
        </div>
      </section>
      <HomeSection2 />
      <Footer></Footer>
    </>
  );
}
