"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Navbar from "@/Components/Navbar/page";
import Cards from "@/Components/Cards/page";
import Project from "@/Components/Projectscard/page";
import Link from "next/link";
import Button from "@/Components/Button/page";
import ProjectSample from "@/Components/ProjectSample/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Form from "@/Components/Form/page";
import Slider from "@/Components/Slider/page";

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbxM0bxJvLELtkAvX6L5jUnQrtnGn6VWr25lSWLZkkE03u0ViIrmFxesebAfPOsmLgs/exec",
  //     { method: "no-cors" }
  //   ) // Replace with your actual endpoint URL
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // console.log(data);
  return (
    <>
      <main className=" flex flex-col gap-20">
        <section>
          <div
            className=" w-[95%] bg-blackShade text-white mx-auto py-5 rounded-[40px] px-3 md:px-6
           pt-20 md:pt-[100px] pb-6 flex flex-col justify-center items-center gap-5 md:gap-10"
          >
            <h1 className="title-inner text-4xl leading-[36px] md:text-6xl md:leading-[60px] lg:text-[80px] lg:leading-[80px] max-w-[800px] font-bold font-inter text-center">
              Frontend Developer
              <br />
              Based in India
            </h1>
            <p className=" font-inter font-normal text-base md:text-xl text-textgrey max-w-[600px] text-center">
              I’ll design your website and will develop to land it on internet
              using Code and No-code.
            </p>
            <Button clases="" text="Contact Me" link="#contact"></Button>
            <div className="flex flex-col lg:flex-row gap-10 w-full mt-10">
              <ProjectSample
                heading="Vayal's Kitchen"
                imag="/Projects/vayals.png"
                platform="nextjs"
                link="https://vayals-restaurant.vercel.app/"
                design="/Projects/vayals.png"
              ></ProjectSample>
              <ProjectSample
                heading="Vajro India"
                imag="/Projects/vajro.png"
                platform="webflow"
                link="https://vajro.com"
                design="/Projects/vayals.png"
              ></ProjectSample>
            </div>
          </div>
        </section>
        <section>
          <div className=" w-[95%] mx-auto flex flex-col gap-10 justify-center items-center">
            <p className=" text-xl text-black font-inter font-normal tracking-[5px] uppercase border-b border-black w-fit">
              About Me
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-between items-center">
              <div className=" flex flex-col gap-10 ">
                <Image
                  src="/profile.jpg"
                  width={3000}
                  height={3000}
                  className=" w-60 h-auto aspect-square rounded-full"
                ></Image>
              </div>
              <p className=" text-xl font-light font-inter w-full">
                Hi, I'm Vignesh Sivagnanam, a visionary frontend developer with
                3+ years of expertise. Proficient in{" "}
                <span className=" font-medium">
                  HTML, CSS, JavaScript, React JS, Next JS, and Webflow
                </span>
                , specializes in crafting cutting-edge web applications. With a
                focus on user-centric design, delivers seamless and innovative
                solutions that redefine digital experiences.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className=" w-[95%] mx-auto bg-blackShade rounded-[40px] pt-20 md:pt-[100px] pb-6 px-3 md:px-6 flex flex-col justify-center items-center gap-10">
            <p className=" text-xl text-textgrey font-inter font-normal tracking-[5px] uppercase text-center border-b border-white w-fit">
              WHAT I’M DOING
            </p>
            <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <Cards
                bg="#ffffff"
                heading="Responsive and SEO friendly website development"
                imag={["./Home/react.svg", "./Home/nextjs.svg"]}
              ></Cards>
              <Cards
                bg="#ffffff"
                heading="Interactive website with smooth animations"
                imag={["./Home/gsap.svg"]}
              ></Cards>
              <Cards
                bg="#ffffff"
                heading="No Code Development with Webflow"
                imag={["./Home/webflow.svg"]}
              ></Cards>
            </div>
            <div className=" w-full overflow-hidden max-h-fit">
              <Slider></Slider>
            </div>
          </div>
        </section>
        <Form />
        <section>
          <div
            className=" w-[95%] bg-blackShade text-white mx-auto rounded-t-[40px] px-3 md:px-6
           pt-[100px] pb-[60px] flex flex-col justify-center items-center gap-10"
          >
            <h1 className=" text-4xl leading-[36px] md:text-6xl md:leading-[60px] lg:text-[80px] lg:leading-[80px] max-w-[800px] text-center font-bricolage text-white">
              Have a Cool Project?
            </h1>
            <Button clases="" text="Contact Me" link="#contact"></Button>
            <div className=" border-t border-textgrey w-full opacity-30"></div>
            <div className=" flex flex-wrap gap-10">
              <div className="flex flex-row justify-start items-start gap-5 flex-wrap">
                {/* <p className=" text-2xl font-bricolage font-medium border-b w-fit border-white">
                  Social Media Links
                </p> */}
                <Link
                  className=" text-xl font-bricolage font-medium deco"
                  href="https://www.linkedin.com/in/vignesh-sivagnanam-43316215a/"
                  target="blank"
                >
                  LinkedIn
                </Link>
                <Link
                  target="blank"
                  className=" text-xl font-bricolage font-medium deco"
                  href="https://www.instagram.com/vignesh.sivagnanam/"
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div className=" border-t border-textgrey w-full opacity-30"></div>
            <p className=" text-textgrey text-xl font-inter opacity-50">
              2024 | Vignesh Sivagnanam
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
