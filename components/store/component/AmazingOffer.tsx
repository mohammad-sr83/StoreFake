
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import CardShop from "../Card/CardShopp";

export default function AmazingOffer() {
  const array = [
    {
      price:12000,
      id: 1,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 2,
      title: "ایرپاد",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 3,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 4,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 5,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 6,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 7,
      title: "ایرپاد",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 8,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      id: 9,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price:12000,
      discount:25,
      id: 10,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  return (
    <div
      className="w-full h-1/3 flex justify-between items-center flex-col gap-3 px-6 pt-3 mb-3 bg-red-600 border-2 rounded-2xl"
    >
      <div className="w-full flex justify-between items-center content-start gap-3 py-3 rounded-2xl">
        <SwiperComponentButton
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
          }}
        >
          <SwiperSlide
            className="w-full h-full p-1 cursor-pointer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "10rem",
            }}
          >
            <div className="w-full h-[18rem] flex justify-center gap-3   items-center flex-col text-white">
              <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" />
              <span>15:00:20</span>
              <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg" />
              <Link href={""}>
                <span className="text-sm flex justify-center items-center">
              مشاهده همه
               <ArrowLeft size={15}/>
             </span>
              </Link>
            </div>
          </SwiperSlide>
          {array.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full p-1 cursor-pointer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "10rem",
              }}
            >
              <Link href={`store/${item.id}`}>
                <CardShop amazing="5" Item={item as any} />
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide
            className="w-full h-full p-1 cursor-pointer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "10rem",
            }}
          >
            <div
              className={`w-full h-[18rem] flex-nowrap flex justify-center items-center rounded-l-2xl flex-col gap-4 bg-(--ColorBase)`}
            >
              <ArrowLeft />
              مشاهده همه
            </div>
          </SwiperSlide>
        </SwiperComponentButton>
      </div>
    </div>
  );
}
