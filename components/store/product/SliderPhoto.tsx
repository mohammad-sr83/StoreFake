"use client";

import ImgModal from "@/components/imageModal/ImgModal";
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

export default function SliderPhotoProduct() {
  const [isshow, setisshow] = useState(false);
  const [showpic, setshopic] = useState(
    "https://dkstatics-public.digikala.com/digikala-products/d6518a10b641b32833525b184f518e9ad0a38ec0_1751860865.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  );
  const Items2 = [
    {
      id: 1,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/79d453ff03437f2fe57480c8903b4014eef8713c_1735200761.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 3,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/d003f64e4be282e3ff35317a6f91149e0c04628b_1718456751.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/587531c61c0ec193de0b90a504cb9690f9959627_1731758709.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 6,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 7,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/79d453ff03437f2fe57480c8903b4014eef8713c_1735200761.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 8,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/d003f64e4be282e3ff35317a6f91149e0c04628b_1718456751.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 9,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/587531c61c0ec193de0b90a504cb9690f9959627_1731758709.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  return (
    <>
      <div className="h-full flex justify-center items-center flex-col gap-3">
        <img
          className="hidden sm:flex object-cover  w-full h-2/3 cursor-pointer"
          onClick={() => setisshow(true)}
          src={showpic}
        />
            <div className="w-full h-1/2 sm:w-[15rem] lg:w-[30rem] flex justify-center items-center">
          <SwiperComponentButton
            isNotFreeMode={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 5 },
              640: { slidesPerView: 4, spaceBetween: 8 },
              1024: { slidesPerView: 4, spaceBetween: 5 },
            }}
          >
            {Items2.map((item, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer max-h-[15rem] flex items-center  justify-center"
                onClick={() => setshopic(item.photo)}
              >
                <div className="w-full h-full sm:border rounded-xl overflow-hidden">
                  <img
                    src={item.photo}
                    className="w-full h-full max-h-[15rem] object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponentButton>
        </div>
        <ImgModal
          title="نمایش عکس "
          value={showpic}
          setShow={setisshow}
          showModal={isshow}
          rounded={false}
        />
      </div>
    </>
  );
}
