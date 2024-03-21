import Image from "next/image";
import React from "react";

const Cards = ({ bg, textColor, heading, para, imag }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`w-full flex flex-col justify-between items-start md:items-center px-5 py-10 border-2 border-black rounded-[20px]`}
    >
      {/* <Image></Image> */}
      <h2
        style={{ color: textColor ? textColor : "#000000" }}
        className=" font-bricolage font-semibold text-2xl"
      >
        {heading}
      </h2>
      <p
        style={{ color: textColor ? textColor : "#000000" }}
        className={`text-2xl font-bricolage font-medium `}
      >
        {para}
      </p>
      <div className=" flex flex-row gap-10 justify-start w-full mt-10">
        {imag &&
          imag.map((item, ind) => (
            <Image
              key={ind}
              src={item}
              width={3000}
              height={3000}
              className=" max-w-[50px] h-auto"
            ></Image>
          ))}
      </div>
    </div>
  );
};

export default Cards;
