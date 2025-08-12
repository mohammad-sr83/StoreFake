"use client";

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";

interface SwiperFormProps {
  children: React.ReactNode;
}

export const SwiperComponentButton: React.FC<SwiperFormProps> = ({ children }) => {
  return (
    <Swiper
      className="w-full flex justify-center items-center px-4"
      spaceBetween={10}
      slidesPerView="auto"
      freeMode={true}
      modules={[FreeMode]} 
      loop={false}
      grabCursor={true} 
    >
      {children}
    </Swiper>
  );
};
