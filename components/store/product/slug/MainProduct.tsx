"use client";

import { SortDesc } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCardSearch from "./ProductCardPage";

const products = [
  {
    id: 1,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 128 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 102500000,
    oldPrice: 105000000,
    rating: 4.7,
    capacity: "128 گیگابایت",
    tag: "",
  },
  {
    id: 2,
    title: "گوشی موبایل اپل iPhone 16 Pro ZAA ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 180690000,
    oldPrice: 182000000,
    rating: 4.6,
    capacity: "256 گیگابایت",
    tag: "فروش ویژه",
  },
  {
    id: 3,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 128999000,
    oldPrice: 130000000,
    rating: 4.5,
    capacity: "256 گیگابایت",
    tag: "",
  },
  {
    id: 1,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 128 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 102500000,
    oldPrice: 105000000,
    rating: 4.7,
    capacity: "128 گیگابایت",
    tag: "",
  },
  {
    id: 2,
    title: "گوشی موبایل اپل iPhone 16 Pro ZAA ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 180690000,
    oldPrice: 182000000,
    rating: 4.6,
    capacity: "256 گیگابایت",
    tag: "فروش ویژه",
  },
  {
    id: 3,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 128999000,
    oldPrice: 130000000,
    rating: 4.5,
    capacity: "256 گیگابایت",
    tag: "",
  },
  {
    id: 1,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 128 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 102500000,
    oldPrice: 105000000,
    rating: 4.7,
    capacity: "128 گیگابایت",
    tag: "",
  },
  {
    id: 2,
    title: "گوشی موبایل اپل iPhone 16 Pro ZAA ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 180690000,
    oldPrice: 182000000,
    rating: 4.6,
    capacity: "256 گیگابایت",
    tag: "فروش ویژه",
  },
  {
    id: 3,
    title: "گوشی موبایل اپل iPhone 16 CH دو سیم کارت ظرفیت 256 گیگابایت",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: 128999000,
    oldPrice: 130000000,
    rating: 4.5,
    capacity: "256 گیگابایت",
    tag: "",
  },
];

export default function MainProduct() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-end items-center gap-2 p-2 overflow-auto hide-scrollbar">
        <span className="text-gray-500 text-xs text-nowrap">30 کالا</span>
        <div className="w-full flex overflow-auto justify-end items-center gap-2 text-gray-500 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Link key={item} className="text-xs whitespace-nowrap" href="">
              مرتبط‌ترین
            </Link>
          ))}
        </div>
        <div className="flex text-nowrap justify-center items-center text-xs">
          :مرتب سازی
          <SortDesc size={15} className="ml-1" />
        </div>
      </div>

      <div className="w-full min-h-[20rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item, index) => (
          <ProductCardSearch key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
