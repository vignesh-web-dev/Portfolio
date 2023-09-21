import React from "react";
import home from "../Styles/Home.module.css";
import Footer from "../Components/Footer";
import ExamplePdf from "../assets/VigneshSivagnanam.pdf";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once on scroll
    });
  }, []);
  return (
    <>
      <section className={home.Section}>
        <div className={home.wrapper1}>
          <h2 className={home.position} data-aos="slide-up">
            Frontend Web Developer + Designer
          </h2>
          <p data-aos="slide-up" className={home.MainPara}>
            a Indian-based Frontend Developer and Graphic Designer passionate
            about creating engaging and user-friendly web experiences.
          </p>
          <a
            className={home.buttonwrap}
            data-aos="slide-up"
            href={ExamplePdf}
            download="Vignesh-Sivagnanam"
            target="_blank"
            rel="noreferrer"
          >
            <button className={home.resumeButton}>Download my Resume</button>
          </a>
        </div>
        <div className={home.wrapper2}></div>
      </section>
    </>
  );
}
