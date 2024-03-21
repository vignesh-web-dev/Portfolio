import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full h-20 max-h-40">
      <div className="max-w-7xl mx-auto px-8 h-full w-full flex flex-row justify-center items-center">
        {/* <div className=""> */}
        {/* <p className=" font-inter font-extrabold text-4xl -tracking-[12px]">
          VS
        </p> */}
        {/* </div> */}
        <ul className=" text-black flex flex-row gap-8 items-center font-bricolage font-light">
          <li key="0" className="decowhite">
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Image
              alt="logo"
              src="/logo.svg"
              height={3000}
              width={3000}
              className=" max-w-[50px] h-auto w-full"
            ></Image>
          </li>
          <li key="1" className="decowhite">
            <Link href="/contact">Hire Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
