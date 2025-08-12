"use client";


import { Input } from "@/components/ui/input";
import {
  Grid3x3,
  Info,
  Menu,
  Search,
  ShoppingCart,
  Star,
  Tags,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CateguryOption from "../Categury/CateguryOption";
import { DrawerMobaile } from "./ModalComponent";
import ShoppingCard from "../Shopping/ShoppingCard";

export default function HeaderStore() {
  const [openModalCategury, setOpenModalCategury] = useState(false);
  const [openModalShoppingCart, setOpenModalShoppingCart] = useState(false);

  const array = [
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/bf3b67471337c7f0fc485c8e193e7fa7e0faba2d_1727606657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - نات اکتیو",
    },
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c566fc253a28b768fff081fc011b8650245fa7e7_1745016324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title: "هدفون بلوتوثی مدل Airpods Pro 2025",
    },
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/98f5967d3b11b4069c7a89d9608fac880f4a24dc_1690718110.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy Z Flip5 تک سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    },
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/59d42d66e647de016c7916804a719457fc096d20_1746451526.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "بند آی ویش مدل Steel loop-F3 مناسب برای ساعت هوشمند سامسونگ Galaxy Watch Fit 3",
    },
  ];

  return (
    <>
      {/* Header top */}
      <div
        dir={ "rtl"}
        className="w-full h-[5rem] md:h-[4rem] border-t-2 bg-background"
      >
        <div className="md:max-w-6xl flex justify-between z-50 items-center pt-2 px-2 md:px-0 mx-auto">
          <span className="text-2xl font-bold">Name Store</span>
          <div className="relative w-[10rem] md:w-[20rem]">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={16}
            />
            <Input placeholder={'جستجو'} className="pl-8" />
          </div>
        </div>
      </div>
      <div
        dir={"rtl"}
        className="w-full h-[3rem] flex justify-between fixed md:static bottom-0 z-50 items-center md:border-b-2 bg-background"
      >
        <div className="w-full h-full md:max-w-6xl mx-auto hidden md:flex justify-between items-center px-2">
          <div className="relative group">
            <span className="flex justify-center items-center gap-1 pb-2 cursor-pointer hover:text-green-700">
              <Menu size={18} />
              دسته بندی ها
            </span>
            <div className="z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto absolute top-full transition-opacity duration-300 rounded-2xl flex flex-col gap-4 p-4 border w-[50rem] h-[30rem] bg-background">
              <CateguryOption />
            </div>
          </div>

          <div className="relative group">
            <Link
              href={`/shoopingCart`}
              className="flex justify-center items-center gap-1 pb-2 cursor-pointer hover:text-green-700"
            >
              <ShoppingCart size={18} />
              سبد خرید
            </Link>
            <div className="z-40 opacity-0 overflow-y-auto pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto absolute top-full transition-opacity duration-300 rounded-2xl flex flex-col gap-4 p-4 border w-[40rem] h-[30rem] bg-background">
              <ShoppingCard isShow={true} photo={array} />
            </div>
          </div>

          <Link className="hover:text-green-700" href="#bestSeller">
            پر فروش ترین ها
          </Link>
          <Link className="hover:text-green-700" href="./">
            درباره ما
          </Link>
          <Link className="hover:text-green-700" href="./">
            ارتباط با ما
          </Link>
        </div>

        <div className="w-full h-full md:max-w-6xl text-xs mx-auto text-muted-foreground grid grid-cols-5 md:hidden justify-between items-center border-t">

          <div
            onClick={() => setOpenModalCategury(true)}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Grid3x3 size={18} />
            <span>دسته بندی</span>
          </div>
          <DrawerMobaile
            open={openModalCategury}
            setOpen={setOpenModalCategury}
            children={<CateguryOption />}
          />

          {/* Offers */}
          <Link href="./">
            <div className="flex flex-col items-center justify-center">
              <Tags size={18} />
              <span>پیشنهادی</span>
            </div>
          </Link>

          {/* ShoppingCart Mobile */}
          <div
            onClick={() => setOpenModalShoppingCart(true)}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <ShoppingCart size={18} />
            <span>سبد خرید</span>
          </div>
          <DrawerMobaile
            open={openModalShoppingCart}
            setOpen={setOpenModalShoppingCart}
            children={<ShoppingCard isShow={true} photo={array} />}
          />
          {/* About Us */}
          <Link href="./">
            <div className="flex flex-col items-center justify-center">
              <Info size={18} />
              <span>درباره ما</span>
            </div>
          </Link>

          {/* Best Sellers */}
          <Link href="#bestSeller">
            <div className="flex flex-col items-center justify-center">
              <Star size={18} />
              <span>پر فروش</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
