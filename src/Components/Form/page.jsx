import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const onSubmit = async (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEle);
    try {
      fetch(
        "https://script.google.com/macros/s/AKfycbyrSMMlCr4tIjXKbHqg6rDXhh6tqR10cQ1x_mw5T3l_g-W-lyAw9_SWjuBdp40_peJu/exec",
        {
          method: "POST",
          body: formData,
        }
      ).then((res) => {
        console.log(res);
        if (res.ok) {
          toast(
            "Your message has been received. Expect a prompt response from us shortly."
          );
          formEle.reset();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="contact">
      <div className=" w-[95%] mx-auto py-5 rounded-[40px] px-6 pb-6 flex flex-col justify-center items-center gap-10">
        <p className=" text-xl text-black font-inter font-normal tracking-[5px] uppercase border-b border-black w-fit">
          Contact Form
        </p>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="form w-full flex flex-col gap-10"
        >
          <div className=" w-full">
            <p className=" text-xl md:text-4xl font-bricolage">I'm</p>
            <input
              name="Name"
              type="text"
              placeholder="Name"
              className=" w-full mt-2 md:mt-5 border-b-2 border-black  outline-none h-10 md:h-16 text-xl md:text-2xl px-5 placeholder:text-textgrey font-inter"
            ></input>
          </div>
          <div className=" flex flex-col md:flex-row gap-10 md:gap-5">
            <div className=" w-full ">
              <p className=" text-xl md:text-4xl font-bricolage">
                my phone number
              </p>
              <input
                name="Phone"
                type="text"
                placeholder="Phone"
                className=" w-full mt-2 md:mt-5 border-b-2 border-black  outline-none h-10 md:h-16 text-xl md:text-2xl px-5 placeholder:text-textgrey font-inter"
              ></input>
            </div>
            <div className=" w-full">
              <p className=" text-xl md:text-4xl font-bricolage">my email</p>
              <input
                name="Email"
                type="text"
                placeholder="Email"
                className=" w-full mt-2 md:mt-5 border-b-2 border-black  outline-none h-10 md:h-16 text-xl md:text-2xl px-5 placeholder:text-textgrey font-inter"
              ></input>
            </div>
          </div>
          <div className=" w-full">
            <p className=" text-xl md:text-4xl font-bricolage">
              and the message is
            </p>
            <textarea
              name="Message"
              type="text"
              placeholder="Message"
              className=" w-full mt-5 border-b-2 border-black  outline-none h-36 text-xl md:text-2xl px-5 placeholder:text-textgrey font-inter"
            ></textarea>
          </div>
          <button
            className=" w-fit mx-auto bg-green px-9 py-3 rounded-full text-xl leading-[20px] font-semibold cursor-pointer text-black"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer theme="dark" hideProgressBar={true} />
    </section>
  );
};

export default Form;
