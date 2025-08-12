import { SwiperSlide } from "swiper/react";
import {Sparkles } from "lucide-react"
import CardBrand from "./brandCard";
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";

export default function BrandStore() {
  const array = [
    "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    "https://dkstatics-public.digikala.com/digikala-brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    "https://dkstatics-public.digikala.com/digikala-brands/5a10ae95eb42fc96906c8062563b28062668d418_1722238640.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    "https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    "https://dkstatics-public.digikala.com/digikala-brands/e44886020b773202d6d431e2fef2f3bd8bd3bc7f_1737817444.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
  ];
  
  return (
    <div
      dir={"rtl"}
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <h2 className="text-xl flex justify-center items-center">
        <Sparkles className="text-yellow-500" />
       برند ها
      </h2>
      <div className="w-full flex justify-between items-center content-start gap-3 p-3">
        <SwiperComponentButton>
          {array.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full p-1 cursor-pointer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "12rem",
              }}
            >
              <CardBrand photo={item} />
            </SwiperSlide>
          ))}
        </SwiperComponentButton>
      </div>
    </div>
  );
}
