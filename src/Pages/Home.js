import React from "react";
import home from "../Styles/Home.module.css";
import Footer from "../Components/Footer";
import ExamplePdf from "../assets/VigneshSivagnanam.pdf";

export default function Home() {
  return (
    <>
      <div className={home.wrapper1}>
        <div className={home.textDiv}>
          <h2>
            Hi. I'm <span className={home.nameSpan}>Vignesh</span>
          </h2>
          {/* <h2>Front-end Web Developer</h2> */}
          <p>
            Experienced front-end developer passionate about creating engaging
            and user-friendly web experiences.
          </p>
          <a
            href={ExamplePdf}
            download="Vignesh-Sivagnanam"
            target="_blank"
            rel="noreferrer"
          >
            <button className={home.resumeButton}>Download my Resume</button>
          </a>
          <div className={home.logos}>
            <div className={home.logoSlide}>
              <img src="./html.png" alt=""></img>
              <img src="./css.png" alt=""></img>
              <img src="./javascript.png" alt=""></img>
              <img src="./react.png" alt=""></img>
              <img src="./illustrator.png" alt=""></img>
            </div>
            <div className={home.logoSlide}>
              <img src="./html.png" alt=""></img>
              <img src="./css.png" alt=""></img>
              <img src="./javascript.png" alt=""></img>
              <img src="./react.png" alt=""></img>
              <img src="./illustrator.png" alt=""></img>
            </div>
            <div className={home.logoSlide}>
              <img src="./html.png" alt=""></img>
              <img src="./css.png" alt=""></img>
              <img src="./javascript.png" alt=""></img>
              <img src="./react.png" alt=""></img>
              <img src="./illustrator.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className={home.imgDiv}>
          <img src="./mrrobot.png" alt=""></img>
          <img src="./Dots.png" alt=""></img>
          <img src="./Linelogo.png" alt=""></img>
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
          <img src="./quote.png" alt="mark"></img>
          <h2>I'm not lazy, I'm just on 'developer mode'.</h2>
          <img src="./quote.png" alt="mark"></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
