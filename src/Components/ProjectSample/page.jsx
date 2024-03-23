import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectSample = ({ heading, imag, platform, link, design, desc }) => {
  return (
    <Link href={link ? link : "#"} target="blank">
      <div
        className={`w-full flex flex-col sm:flex-row gap-5 justify-start items-center p-5 border-2 border-white rounded-[20px] overflow-hidden relative projectcard`}
      >
        <Image
          src={imag}
          width={3000}
          height={3000}
          className=" w-full sm:max-w-[50%] h-auto"
        ></Image>
        <div className=" w-full flex flex-col justify-start items-start gap-5 mt-5">
          <p className="bg-green text-black text-xs rounded-full font-bold font-inter px-3 py-1">
            Sample Project
          </p>
          <h2 className=" font-inter font-semibold text-2xl">{heading}</h2>
          <p className=" font-normal font-inter text-sm">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSample;
