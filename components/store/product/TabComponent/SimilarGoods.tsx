
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import CardShop from "../../Card/CardShopp";

export default function SimilarGoods({ title }: { title?: string }) {
  const array = [
    {
      price: 12000,
      id: 1,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 2,
      title: "هدفون بی سیم اوی مدل EL ULTIMATE 66 ENHANCED T",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 3,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 4,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 5,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 6,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 7,
      title: "ایرپاد",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 8,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 9,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      discount: 25,
      id: 10,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];
  
  return (
    <div
      className="w-full h-1/2 flex justify-between items-start flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <h2 className="text-xl py-3 border-b-2 border-red-500 mx-3">
        {title ??"محصولات دیگر"}
      </h2>
      <div className="w-full flex justify-between items-center content-start gap-5 p-3">
        <SwiperComponentButton
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 },
            640: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 6, spaceBetween: 5 },
          }}
        >
          {array.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full p-1 cursor-pointer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href={`/store/${item.id}`}>
                <CardShop Item={item as any} index1={index === 0} />
              </Link>
            </SwiperSlide>
          ))}
        </SwiperComponentButton>
      </div>
    </div>
  );
}
