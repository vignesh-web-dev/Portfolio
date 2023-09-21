import React from "react";
import initial from "../Styles/Initial.module.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Initial = () => {
  const divOne = useRef(null);
  useEffect(() => {
    setTimeout(function () {
      startTime();
    }, 3000);
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once on scroll
    });
  }, []);
  function startTime() {
    console.log("hit");
    if (divOne.current && divOne.current) {
      divOne.current.style.transform = "translateY(-100%)";
    }
  }
  return (
    <section ref={divOne} className={initial.wrapper}>
      <div id="one" className={`${initial.land} ${initial.one}`}>
        <div className={initial.Hwrapper}>
          <h1>Vignesh</h1>
        </div>
        <div className={initial.Hwrapper}>
          <h1>Sivagnanam</h1>
        </div>
      </div>
    </section>
  );
};

export default Initial;
