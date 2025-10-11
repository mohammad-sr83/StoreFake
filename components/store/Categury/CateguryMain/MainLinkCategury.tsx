"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function MainLinkCategury({ indexShow }: { indexShow: number }) {
  const categories = [
    {
      title: "آیفون‌ها",
      links: ["آیفون 15", "آیفون 14", "آیفون 13"],
    },
    {
      title: "سامسونگ",
      links: ["S24", "S23", "A55", "A35", "A15", "Fold 6"],
    },
    {
      title: "شیائومی",
      links: ["Redmi Note 13", "Mi 13T Pro"],
    },
    {
      title: "هوآوی",
      links: ["Mate 60", "Nova 12", "P60 Pro"],
    },
    {
      title: "آیفون‌ها",
      links: ["آیفون 15", "آیفون 14", "آیفون 13"],
    },
    {
      title: "سامسونگ",
      links: ["S24", "S23", "A55", "A35", "A15", "Fold 6"],
    },
    {
      title: "شیائومی",
      links: ["Redmi Note 13", "Mi 13T Pro"],
    },
    {
      title: "هوآوی",
      links: ["Mate 60", "Nova 12", "P60 Pro"],
    },
    {
      title: "آیفون‌ها",
      links: ["آیفون 15", "آیفون 14", "آیفون 13"],
    },
    {
      title: "سامسونگ",
      links: ["S24", "S23", "A55", "A35", "A15", "Fold 6"],
    },
    {
      title: "شیائومی",
      links: ["Redmi Note 13", "Mi 13T Pro"],
    },
    {
      title: "هوآوی",
      links: ["Mate 60", "Nova 12", "P60 Pro"],
    },
  ];

  return (
    <div
      className="w-full h-full flex justify-start items-start flex-col gap-6 p-3"
    >
      <Link
        href={""}
        className="text-blue-500 flex justify-center items-center"
      >
        همه محصولات موبایل
        <ChevronLeft size={15} />
      </Link>

      <div className="w-full md:columns-3 lg:columns-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="break-inside-avoid mb-3 flex flex-col gap-3">
            <Link
               href={``}
              className="border-r-2 border-red-500 pr-2 text-lg flex justify-start items-center gap-1"
            >
              {cat.title}
              <ChevronLeft size={15} />
            </Link>
            <div className="flex flex-col gap-2 pr-2">
              {cat.links.map((link, j) => (
                <Link key={j} href={`product/${link}`} className="text-xs text-gray-400">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
