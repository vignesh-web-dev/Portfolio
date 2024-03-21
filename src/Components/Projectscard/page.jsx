import Image from "next/image";
import React from "react";
import "./projectcard.css";
import Link from "next/link";

const Cards = ({ heading, imag, platform, link, design }) => {
  return (
    <div
      // href={link ? link : "#"}
      className={`w-full bg-white flex flex-col justify-between items-center md:p-5 border-2 border-black rounded-[20px] overflow-hidden relative projectcard max-h-[80%]`}
    >
      <Image
        src={imag}
        width={3000}
        height={3000}
        className=" max-w-full h-auto"
      ></Image>
      <div className=" w-full flex flex-row justify-between items-center mt-5 absolute z-10 bottom-0 px-10 py-2 md:py-5 bg-green">
        <h2 className=" font-inter font-semibold text-base md:text-2xl">
          {heading}
        </h2>
        <Image
          alt=""
          src={
            platform == "nextjs"
              ? "/Home/nextjs.svg"
              : platform == "webflow"
              ? "/Home/webflow.svg"
              : ""
          }
          width={3000}
          height={3000}
          className=" max-w-7 md:max-w-[60px] h-auto"
        ></Image>
        {link ? (
          <Link
            href={link}
            className=" text-base font-bricolage font-medium bg-white p-3 rounded-xl"
          >
            View Project
          </Link>
        ) : <div></div>}
      </div>

      <div
        className={`absolute w-full h-full z-10 -top-full blackbg flex flex-row gap-3 justify-center items-center font-semibold ${
          platform == "nextjs"
            ? "bg-black"
            : platform == "webflow"
            ? "bg-[#015DA0]"
            : ""
        }`}
      >
        <div className=" py-5 px-10 rounded-full text-white font-inter border-2 border-white cursor-pointer">
          View Design
        </div>
        {link && (
          <Link
            href={link}
            className=" py-5 px-10 rounded-full text-white font-inter border-2 border-white"
          >
            Visit Site
          </Link>
        )}
      </div>

      {/* <div className=" p-3 absolute bg-black w-fit bottom-5  flex justify-center items-center text-white"></div> */}
    </div>
  );
};

export default Cards;
