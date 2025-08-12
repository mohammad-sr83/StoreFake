
import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";
import {ArrowLeft} from "lucide-react"
import { useTheme } from "next-themes";
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";
import CardShop from "../Card/CardShopp";

export default function SimilarGoods() {
  const { resolvedTheme} = useTheme();
  const array = [
    {
      id: 1,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 3,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 5,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 6,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  return (
    <div
      dir={ "rtl"}
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <h2 className="text-xl">پر فروش ترین ها</h2>
      <div className="w-full flex justify-between items-center content-start gap-5 p-3">
        <SwiperComponentButton>
          {array.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full p-1 cursor-pointer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "14rem",
              }}
            >
              <Link  href={`/${item.id}`}>
                <CardShop photo={item.photo} />
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide
            className="w-full h-full p-1 cursor-pointer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "14rem",
            }}
          >
            <div
              className={`w-full h-[22rem] sm:h-[24rem] flex justify-center items-center rounded-l-2xl flex-col gap-4 border-2 border-slate-200 ${
                resolvedTheme=== "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <span className="p-4 rounded-full border-2 text-blue-600">
                <ArrowLeft />
              </span>
              <span className="">مشاهده همه</span>
            </div>
          </SwiperSlide>
        </SwiperComponentButton>
      </div>
    </div>
  );
}
