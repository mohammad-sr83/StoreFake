import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { Sparkles } from "lucide-react";
import CardBestSeller from "./CardBestSeller";
import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";

export default function BestSellerStore() {
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
    {
      id: 7,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 8,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 9,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 10,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 11,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 12,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 13,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 14,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 15,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  const groupedArray = [];
  for (let i = 0; i < array.length; i += 3) {
    groupedArray.push(array.slice(i, i + 3));
  }

  return (
    <div
      dir={"rtl"}
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <div className="w-full flex justify-center items-center relative">
        <Link className="absolute left-3 text-blue-600" href={""}>
          بیشتر
        </Link>
        <h2
          id="bestSeller"
          className="text-xl flex justify-center items-center"
        >
          <Sparkles className="text-yellow-500" /> پر فروش ترین ها
        </h2>
      </div>
      <div className="w-full flex justify-between items-center content-start  p-3">
        <SwiperComponentButton>
          {groupedArray.map((group, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "16rem",
              }}
            >
              <div className="">
                {group.map((item, index) => (
                  <Link href={`store/${item.id}`} key={item.id}>
                    <CardBestSeller
                      item={{
                        photo: item.photo,
                        title: "گوشی ایفون 15 ",
                        index: index,
                        number: item.id,
                      }}
                    />
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponentButton>
      </div>
    </div>
  );
}
