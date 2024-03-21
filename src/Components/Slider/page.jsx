"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Project from "@/Components/Projectscard/page";

const Slider = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (typeof window) {
      setLoad(true);
    }
  }, []);

  return (
    <>
      {load && (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          pagination={{
            clickable: true,
          }}
          autoHeight={true}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Project
              heading="Vajro India"
              imag="/Projects/vajro.png"
              platform="webflow"
              link="https://vajro.com"
              design="/Projects/vayals.png"
            ></Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project
              heading="Kazadra"
              imag="/Projects/kazadra.png"
              platform="nextjs"
              link="https://kazadra.com"
              design="/Projects/vayals.png"
            ></Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project
              heading="OneHub Gifts"
              imag="/Projects/onehub.png"
              link="https://onehub.vercel.app/"
              platform="nextjs"
              design="/Projects/vayals.png"
            ></Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project
              heading="Vayal's Kitchen"
              link="http://vayals-restaurant.vercel.app/"
              imag="/Projects/vayals.png"
              platform="nextjs"
              design="/Projects/vayals.png"
            ></Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project
              heading="IP Hackathon"
              imag="/Projects/iphackathon.png"
              platform="webflow"
            ></Project>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Slider;
