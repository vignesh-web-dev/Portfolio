import React, { useRef } from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../Sections/About";

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
      <section className="bg-background">
        <div className="w-[90%] mx-auto max-w-[1439px] my-0 flex flex-col gap-5 relative justify-start items-start md:items-center pt-[100px]">
          <h1 className=" text-clamp text-white font-Krona uppercase mt-5">
            Vignesh
          </h1>
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-[60px] md:gap-[20px]">
            <div className=" w-full md:w-[70%] flex flex-col gap-[40px]">
              <p className="text-white font-Montserrat text-mid">
                Frontend Developer
              </p>
              <p className=" text-text text-white">
                As a front-end developer with 2.8+ years of experience, I have a
                strong foundation in HTML, CSS, JavaScript, React JS and
                Webflow. I am passionate about creating responsive and
                user-friendly web applications that meet the needs of clients
                and end-users
              </p>
            </div>
            <img
              className=" max-w-[250px] w-full md:w-[30%] grayscale hover:grayscale-0"
              src="/profile.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
