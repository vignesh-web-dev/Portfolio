import Link from "next/link";
import React from "react";

const Button = ({ clases, text, link }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      href={link ? link : "#"}
      className={`${clases} bg-green px-9 py-3 rounded-full text-xl leading-[20px] font-semibold cursor-pointer text-black`}
    >
      {text}
    </Link>
  );
};

export default Button;
