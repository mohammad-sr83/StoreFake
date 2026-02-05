"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SliderStore({ Height }: { Height?: string }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const array = [
    [
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f5345308930f088b50a143b095258b2b68a4abe_1745675600.jpg?x-oss-process=image/quality,q_95",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/1d9de7829a91bfdfbb072355ca51222d5f78cc77_1760509149.jpg?x-oss-process=image/resize,w_800/quality,q_80",
    ],
    [
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/c01607d96504422b2a2f246665fff7fbe9844aaf_1745742228.jpg?x-oss-process=image/quality,q_95",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/d274679480a0a588f8c23d8ab6fdf77316aab189_1760903985.gif?x-oss-process=image/resize,w_800",
    ],
    [
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/339e146482a10355645286800d215af3305a6d5f_1735462444.gif?x-oss-process=image",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/7b7426945e3be40148f52e00eec34d8ab352774a_1760530551.jpg?x-oss-process=image/resize,w_800/quality,q_80",
    ],
    [
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/50e6f10162fbacfd174b69bc92070852cf5c7bf9_1745837272.jpg?x-oss-process=image/quality,q_95",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/23773378cebc5204b4b04e12668491896fd7c550_1760777773.jpg?x-oss-process=image/resize,w_800/quality,q_80",
    ],
  ];

  return (
    <div
      dir={"rtl"}
      style={{ height: `${Height && `${Height}rem`}` }}
      className="relative w-full h-[12rem] md:h-[20rem] xl:h-[25rem] group"
    >
      <div className="absolute bottom-0 right-20 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          ref={prevRef}
          className="bg-gray-300 hover:bg-gray-200 text-black p-1 text-xs sm:text-base sm:p-3 rounded-full"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute bottom-0 right-4 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          ref={nextRef}
          className="bg-gray-300 hover:bg-gray-200 text-black p-1 text-xs sm:text-base sm:p-3 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      <Swiper
        className="w-full h-full"
        style={{ borderRadius: Height && "1rem" }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 0,
          },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full cursor-pointer bg-(--ColorBase) dark:bg-(--ColorChat)"
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={item[0]} />
              <img
                src={item[1]}
                alt="Optimized photo"
                className="w-full h-full inline-block rounded-lg md:rounded-none"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
