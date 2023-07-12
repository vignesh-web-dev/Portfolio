import React from "react";
import home from "../Styles/Home.module.css";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className={home.wrapper1}>
        <div className={home.textDiv}>
          <h2>Hi. I'm Vignesh</h2>
          {/* <h2>Front-end Web Developer</h2> */}
          <p>
            Experienced front-end developer passionate about creating engaging
            and user-friendly web experiences.
          </p>
          <button>Get in Touch</button>

          <div className={home.logos}>
            <div className={home.logoSlide}>
              <img src="/html.png" alt=""></img>
              <img src="/css.png" alt=""></img>
              <img src="/javascript.png" alt=""></img>
              <img src="/react.png" alt=""></img>
            </div>
            <div className={home.logoSlide}>
              <img src="/html.png" alt=""></img>
              <img src="/css.png" alt=""></img>
              <img src="/javascript.png" alt=""></img>
              <img src="/react.png" alt=""></img>
            </div>
            <div className={home.logoSlide}>
              <img src="/html.png" alt=""></img>
              <img src="/css.png" alt=""></img>
              <img src="/javascript.png" alt=""></img>
              <img src="/react.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className={home.imgDiv}>
          <img src="/person.png" alt=""></img>
          <img src="/Dots.png" alt=""></img>
          <img src="/Linelogo.png" alt=""></img>
          <div className={home.imgDivBottomText}>
            <div></div>
            <p>
              Currently working as <b>Frontend Developer</b>
            </p>
          </div>
        </div>
      </div>
      <div className={home.wrapper2}>
        <div className={home.innerdiv}>
          <img src="/quote.png" alt="mark"></img>
          <h2>I'm not lazy, I'm just on 'developer mode'.</h2>
          <img src="/quote.png" alt="mark"></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
