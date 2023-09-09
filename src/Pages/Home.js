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
            <div className={home.HomeLeft}>
              <p className={home.tagline}>
                Bringing Websites to Life with Code and Creativity
              </p>
              <h2 className={home.name}>Vignesh Sivagnanam</h2>
              <p className={home.MainPara}>
                a Indian-based Frontend Developer and Graphic Designer
                passionate about creating engaging and user-friendly web
                experiences.
              </p>
              <a
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
            <div className={home.HomeRight}>
              <div className={home.HRImgWrapper}>
                <img
                  className={home.HRImgmain}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694259878/Testing/Asset_8main_spzzkj.png"
                  alt=""
                />
                <img
                  className={home.HRImg1}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694202139/Testing/Asset_2Settings_mpxe2g.png"
                  alt=""
                />
                <img
                  className={home.HRImg2}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694202139/Testing/Asset_6plus_o5otct.png"
                  alt=""
                />
                <img
                  className={home.HRImg3}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694202140/Testing/Asset_4Circel1_toza3h.png"
                  alt=""
                />
                <img
                  className={home.HRImg4}
                  src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694202139/Testing/Asset_5Circel2_jc9pl2.png"
                  alt=""
                />
              </div>
            </div>
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
            <div className={home.imgDivinner}>
              <img
                className={home.imgDivProfilePhoto}
                src="https://res.cloudinary.com/de8yvffdl/image/upload/v1690266902/icons8-webflow-480_h5dvgw.png"
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
