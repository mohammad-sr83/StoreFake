"use client";

import React, { useEffect, useRef, useState } from "react";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import TableDesc from "./tableDesc";
import Link from "next/link";
import { useTheme } from "next-themes";
import CardShop from "../Card/CardShopp";

type SectionKey =
  | "section1"
  | "section2"
  | "section3"
  | "section4"
  | "section5"
  | "section6";

export default function TabMain() {
  const { resolvedTheme} = useTheme();
  const [activeTab, setActiveTab] = useState<SectionKey>("section1");

const sectionRefs: Record<SectionKey, React.RefObject<HTMLDivElement | null>> = {
  section1: useRef<HTMLDivElement | null>(null),
  section2: useRef<HTMLDivElement | null>(null),
  section3: useRef<HTMLDivElement | null>(null),
  section4: useRef<HTMLDivElement | null>(null),
  section5: useRef<HTMLDivElement | null>(null),
  section6: useRef<HTMLDivElement | null>(null),
};


  const handleTabClick = (sectionId: SectionKey) => {
    sectionRefs[sectionId].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries.length > 0) {
          setActiveTab(visibleEntries[0].target.id as SectionKey);
        }
      },
      {
        threshold: 0.2,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        dir={ "rtl"}
        className={`mt-3 mb-3 flex flex-col p-3 w-full  rounded-2xl ${
          resolvedTheme=== "dark" ? " text-white " : " text-black "
        }`}
      >
        <div
          dir={ "rtl"}
          className={`border-b-2 w-full sticky shadow-inner top-1 z-50 ${
            resolvedTheme=== "dark"
              ? "text-white bg-ColorChat"
              : "text-black bg-white"
          } overflow-x-auto whitespace-nowrap hide-scrollbar `}
        >
          <div className="flex w-max">
            {[
              { key: "section1", label: "معرفی" },
              { key: "section2", label: "جزییات" },
              { key: "section3", label: "مشخصات" },
              { key: "section4", label: "دیدگاه کاربران" },
              { key: "section5", label: "سوال" },
              { key: "section6", label: "پر فروش ترین", mobileOnly: true },
            ].map(({ key, label, mobileOnly }) => (
              <button
                key={key}
                onClick={() => handleTabClick(key as SectionKey)}
                className={`
          px-4 py-2 mx-1 rounded-full text-sm 
          ${activeTab === key ? "text-blue-500 font-semibold" : ""}
          ${mobileOnly ? "block md:hidden" : ""}
        `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-9 px-0 md:space-y-16 md:px-4 py-6 max-w-4xl">
          <div
            id="section1"
            ref={sectionRefs.section1}
            className="scroll-mt-32 min-h-[60vh]"
          >
            <h2 className="text-xl font-bold mb-2">معرفی</h2>
            <p>لورم ایپسوم متن ساختگی برای معرفی محصول.</p>
          </div>

          <div
            id="section2"
            ref={sectionRefs.section2}
            className="scroll-mt-32 min-h-[60vh]"
          >
            <h2 className="text-xl font-bold mb-2">جزییات</h2>
            <p>جزئیات فنی و توضیحات کامل محصول.</p>
          </div>

          <div
            id="section3"
            ref={sectionRefs.section3}
            className="scroll-mt-32 min-h-[60vh]"
          >
            <h2 className="text-xl font-bold mb-2"> مشخصات</h2>
            <TableDesc />
          </div>

          <div
            id="section4"
            ref={sectionRefs.section4}
            className="scroll-mt-32 min-h-[60vh]"
          >
            <h2 className="text-xl font-bold mb-4">دیدگاه کاربران</h2>
            <Reviews />
          </div>

          <div
            id="section5"
            ref={sectionRefs.section5}
            className="scroll-mt-32 space-y-9 min-h-[60vh]"
          >
            <h2 className="text-xl font-bold mb-2">سوال ها</h2>
            <Questions />
          </div>
          <div
            id="section6"
            ref={sectionRefs.section6}
            className="flex md:hidden space-y-9 scroll-mt-32 justify-start items-center flex-col min-h-[60vh] gap-2"
          >
            <h2 className="text-xl font-bold mb-2">پر فروش ترین</h2>
            <div className="w-full grid grid-cols-2 justify-center items-center">
              {array.map((item) => (
                <Link
                  className="flex justify-center items-center p-2"
                  key={item.id}
                  href={`/${item.id}`}
                >
                  <CardShop photo={item.photo} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
