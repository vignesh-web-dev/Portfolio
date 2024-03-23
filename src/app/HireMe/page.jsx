import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./hire.css";

const Hireme = () => {
  const Array = [
    {
      name: "Phone",
      link: "+919385304613",
    },
    {
      name: "Email",
      link: "vickyshiva26@gmail.com",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vignesh-sivagnanam-43316215a/",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/+919385304613",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/vignesh.sivagnanam/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/vicky.siva.961/",
    },
  ];
  return (
    <section>
      <div className=" w-[95%] max-w-7xl mx-auto py-10">
        <div className=" flex flex-col justify-center items-center gap-5">
          <div className=" flex flex-col justify-center items-center">
            <h2 className=" text-2xl font-bricolage font-normal text-center max-w-[800px]">
              To Know More About My Works and Educational Background, Click the
              button to download my Resume.
            </h2>
            <a href="/Vignesh Sivagnanam Resume.pdf" download>
              <button className="bg-green px-9 py-3 rounded-full text-xl leading-[20px] font-semibold cursor-pointer text-black mt-10">
                Download My Resume
              </button>
            </a>
          </div>
          <div className=" w-full rounded-[40px] py-10 px-5 flex flex-col gap-10 items-center justify-center ">
            <p className="  text-xl font-inter font-normal tracking-[5px] uppercase text-center border-b border-black w-fit">
              Connect with me
            </p>
            <div className=" flex flex-row flex-wrap justify-center items-center gap-10 max-w-[800px]">
              {Array &&
                Array.map((items, index) => {
                  const src = items.name.toLowerCase();
                  return (
                    <>
                      {items.name == "Phone" || items.name == "Email" ? (
                        <p
                          className=" flex flex-row gap-3 justify-center items-center"
                          title={items.name}
                        >
                          <Image
                            width={3000}
                            height={3000}
                            className=" w-10 h-auto"
                            src={"/" + src + ".png"}
                          ></Image>
                          <span className=" text-xl leading-[20px] font-bricolage font-medium">
                            {items.name == "Phone"
                              ? `${items.link}`
                              : items.name == "Email"
                              ? `${items.link}`
                              : items.name}
                          </span>
                        </p>
                      ) : (
                        <a
                          className=" flex flex-row gap-3 justify-center items-center"
                          type=""
                          href={items.link}
                          title={items.name}
                        >
                          <Image
                            width={3000}
                            height={3000}
                            className=" w-10 h-auto"
                            src={"/" + src + ".png"}
                          ></Image>
                          <p className=" text-xl leading-[20px] font-bricolage font-medium">
                            {items.name == "Phone"
                              ? `${items.link}`
                              : items.name == "Email"
                              ? `${items.link}`
                              : items.name}
                          </p>
                        </a>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
