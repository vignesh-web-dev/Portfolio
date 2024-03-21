import Link from "next/link";
import React from "react";

const Button = ({ clases, text, link }) => {
  return (
    <Link
      href={link ? link : "#"}
      className={`${clases} bg-green px-9 py-3 rounded-full text-xl leading-[20px] font-semibold cursor-pointer text-black`}
    >
      {text}
    </Link>
  );
};

export default Button;
