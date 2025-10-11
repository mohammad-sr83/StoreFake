import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

export default function CateguryStore() {
  const categoryData = [
    {
      id: 1,
      name: 'گوشی',
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      name: 'موبایل',
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      name:"خونه هوشمند",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/8a042388b93c5116604f35092a1fb35f8f0756be_1740299467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 5,
      name:"ماشین",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/03552aa1293fec9f43477814ca62afdacdac18e3_1740299496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 6,
      name: "استراحت",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/deb3f514c62761797eb6a49e1559268b8bce3219_1740299561.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 7,
      name: "استراحت",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 8,
      name: "ورزشی",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 9,
      name: "فروشگاهی",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740299618.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 10,
      name: "ابزار",
      link: "/",
      pic: "https://dkstatics-public.digikala.com/digikala-mega-menu/fb6303218362cd2c48b40fef5da89ad33a5c04d7_1740299524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];


  return (
    <div
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3"
    >
      <h2 className="text-xl">دسته بندی ها</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 content-start gap-5 p-3">
        {categoryData.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-center items-center flex-col gap-2"
          >
            <Link
              className="w-full flex justify-center items-center flex-col gap-2"
              href={item.link}
            >
              <Avatar
                style={{ width: 100, height: 100, position: "relative" }}
                className="h-16 w-16"
              >
                <AvatarImage src={item.pic} />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
