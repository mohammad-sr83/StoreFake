"use client";

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

interface SwiperFormProps {
  children: React.ReactNode;
  isNotFreeMode?: boolean;
  breakpoints?:
    | {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
      }
    | undefined;
}

export const SwiperComponentButton: React.FC<SwiperFormProps> = ({
  children,
  breakpoints,
  isNotFreeMode,
}) => {
  return (
    <Swiper
      className="w-full flex justify-center items-center px-4"
      slidesPerView="auto"
      freeMode={true}
      modules={!isNotFreeMode ? [FreeMode] : undefined}
      loop={false}
      grabCursor={true}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};
