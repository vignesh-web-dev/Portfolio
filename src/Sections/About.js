import React from "react";
import home from "../Styles/Home.module.css";
import ExamplePdf from "../assets/VigneshSivagnanam.pdf";

export default function About() {
  return (
    <>
      <section className={home.ExperienceSection}>
        <div className={home.ExperienceSectionDiv}>
          <h1 className={home.SectionHead}>Skills and Experience</h1>
          <div className={home.ExperienceSectionWrapper}>
            <img
              className={home.ExperienceSectionRelativeImage}
              src="/sec2.png"
              alt=""
            />
            <div className={home.ExperienceSectionItemsWrapper}>
              <div className={home.ExperienceSectionItem}>
                <h1 className={home.ExperienceSectionCompany}>
                  Syncfusion Software Private Limited
                </h1>
                <h1 className={home.ExperienceSectionPosition}>
                  Software Development Engineer
                </h1>
                <p className={home.ExperienceSectionDes}>
                  As a Software Development Engineer, I have extensive
                  experience working with custom controls like Grid view and
                  Pager component, commonly used for developing web, mobile, and
                  desktop applications. Throughout my career, I have developed,
                  and implemented robust solutions for the Syncfusion Grid
                  platform.
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
                  As a Web Developer proficient in Reactjs, I have gained
                  extensive experience in building responsive and user-friendly
                  web applications using HTML, CSS, JavaScript. I have a strong
                  foundation in these technologies and am constantly up-to-date
                  with the latest web development trends and techniques.
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
              <a
                className={home.buttonwrap}
                data-aos="slide-up"
                href={ExamplePdf}
                download="Vignesh-Sivagnanam"
                target="_blank"
                rel="noreferrer"
              >
                <button className={home.resumeButton}>
                  Download my Resume
                </button>
              </a>
            </div>
          </div>
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
    </>
  );
}
