import React, { useRef } from "react";
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
  const slider = useRef();
  return (
    <>
      <section className={home.Section}>
        <div className={home.wrapper1}>
          <h2 className={home.position} data-aos="slide-up">
            Frontend Web Developer +{" "}
            <span className={home.positionSpan}>Designer</span>
          </h2>
          <p data-aos="slide-up" className={home.MainPara}>
            a Indian-based Frontend Developer and Graphic Designer passionate
            about creating engaging and user-friendly web Testimonials.
          </p>

          <div className={home.contactDiv}>
            <button className={home.resumeButton}>Contact Me!</button>
            <button className={home.resumeButton}>Hire Me!</button>
          </div>
        </div>
        <div className={home.wrapper2}></div>
      </section>
      <section className={home.ExperienceSection}>
        <div className={home.ExperienceSectionDiv}>
          <h1 className={home.SectionHead}>Skills and Experience</h1>
          <div className={home.ExperienceSectionWrapper}>
            <div className={home.ExperienceSectionItemsWrapper}>
              <div className={home.ExperienceSectionItem}>
                <h1 className={home.ExperienceSectionCompany}>
                  Syncfusion Software Private Limited
                </h1>
                <h1 className={home.ExperienceSectionPosition}>
                  Software Development Engineer
                </h1>
                <p className={home.ExperienceSectionDes}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur, dolor voluptas quidem assumenda quo mollitia
                  nobis sint id. Aliquam ipsum explicabo sunt quidem veniam
                  excepturi ratione. Cupiditate nulla natus sunt iusto magnam
                  provident animi nihil, laborum, iste, et adipisci optio itaque
                  delectus? Nesciunt nulla, unde sint odit voluptate repellendus
                  vero.
                </p>
                <img
                  className={home.ExperienceSectionImage}
                  src="/dot.png"
                  alt=""
                />
              </div>
              <div className={home.ExperienceSectionItem}>
                <h1 className={home.ExperienceSectionCompany}>
                  Vajro India Private Limited
                </h1>
                <h1 className={home.ExperienceSectionPosition}>
                  Frontend Web Developer
                </h1>
                <p className={home.ExperienceSectionDes}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur, dolor voluptas quidem assumenda quo mollitia
                  nobis sint id. Aliquam ipsum explicabo sunt quidem veniam
                  excepturi ratione. Cupiditate nulla natus sunt iusto magnam
                  provident animi nihil, laborum, iste, et adipisci optio itaque
                  delectus? Nesciunt nulla, unde sint odit voluptate repellendus
                  vero.
                </p>
                <img
                  className={home.ExperienceSectionImage}
                  src="/dot.png"
                  alt=""
                />
              </div>
              <div className={home.ExperienceSectionItem}>
                <h1 className={home.ExperienceSectionCompany}>Freelancing</h1>
                <h1 className={home.ExperienceSectionPosition}>
                  Frontend Web Developer
                </h1>
                <p className={home.ExperienceSectionDes}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur, dolor voluptas quidem assumenda quo mollitia
                  nobis sint id. Aliquam ipsum explicabo sunt quidem veniam
                  excepturi ratione. Cupiditate nulla natus sunt iusto magnam
                  provident animi nihil, laborum, iste, et adipisci optio itaque
                  delectus? Nesciunt nulla, unde sint odit voluptate repellendus
                  vero.
                </p>
                <img
                  className={home.ExperienceSectionImage}
                  src="/dot.png"
                  alt=""
                />
              </div>
            </div>
            <img
              className={home.ExperienceSectionRelativeImage}
              src="/fox-work.jpg"
              alt=""
            />
          </div>
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
      </section>
      <section>
        <div className={home.techDiv}>
          <h1 className={home.SectionHead}>Technologies</h1>
          <div className={home.techWrapper}>
            <div className={home.techItem}>
              <h1>Front-End</h1>
              <ul>
                <li className="material-symbols-outlined">
                  resume <span>Html and CSS</span>
                </li>
                <li className="material-symbols-outlined">
                  resume <span>Tailwind</span>
                </li>
                <li className="material-symbols-outlined">
                  resume <span>JavaScript</span>
                </li>
                <li className="material-symbols-outlined">
                  resume <span>TypeScript</span>
                </li>
                <li className="material-symbols-outlined">
                  resume <span>ReactJS</span>
                </li>
              </ul>
            </div>
            <div className={home.techItem}>
              <h1>Web Design</h1>
              <ul>
                <li className="material-symbols-outlined">
                  resume <span>Figma</span>
                </li>
                <li className="material-symbols-outlined">
                  resume <span>Adobe Illustrator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={home.TestimonialSection}>
        <div className={home.TestimonialDiv}>
          <div className={home.TestimonialTop}>
            <h1 className={home.SectionHead}>Work Testimonial</h1>
            <div className={home.TestimonialSectionButtonDiv}>
              <button
                onClick={() => {
                  // slider.current.sl;
                }}
                className="material-symbols-outlined"
              >
                arrow_back
              </button>
              <button className="material-symbols-outlined">
                arrow_forward
              </button>
            </div>
          </div>
          <div className={home.TestimonialSlider}>
            <div ref={slider} className={home.TestimonialSliderInner}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
