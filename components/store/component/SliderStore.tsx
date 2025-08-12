
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SliderStore({ Height }: { Height?: string }) {
  const { resolvedTheme} = useTheme();
  const [open,setopen]=useState(true)
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const array = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/c2bf123cd30be28951e22680ffae16fcc802e9e2_1744628056.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f5345308930f088b50a143b095258b2b68a4abe_1745675600.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/c01607d96504422b2a2f246665fff7fbe9844aaf_1745742228.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/339e146482a10355645286800d215af3305a6d5f_1735462444.gif?x-oss-process=image",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/50e6f10162fbacfd174b69bc92070852cf5c7bf9_1745837272.jpg?x-oss-process=image/quality,q_95"
  ];

  return (
    <div
      dir={"rtl"}
      style={{ height: `${Height && `${Height}rem`}` }}
      className={`relative w-full h-1/4 xl:h-[25rem] group`}
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
        style={{borderRadius: Height && "1rem",}}
        spaceBetween={25}
        centeredSlides={false}
        slidesPerView={1}
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
      >
        {array.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`w-full h-full cursor-pointer`}
            style={{
              backgroundColor: resolvedTheme=== "dark" ? "#323131" : "#fff",
            }}
          >
            <img
              src={item}
              className={`object-cover w-full h-full aspect-[18/6]`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
