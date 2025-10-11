"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/toolsStore/useCartStore";
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
import CateguryOption from "../Categury/CateguryOption";
import ShoppingCard from "../Shopping/ShoppingCard";

export default function HeaderStore({
  isShowBottom,
}: {
  isShowBottom?: boolean;
}) {
  const { items } = useCartStore();

  return (
    <>
      <div
       
        className="w-full h-16 md:h-16 border-t-2 bg-(--ColorBase)"
      >
        <div className="md:max-w-7xl flex justify-between z-50 items-center pt-2 px-2 md:px-0 mx-auto">
          <Link
            href={`/store`}
            className="text-2xl p-2 font-bold"
          >
            Lemono
          </Link>
          <div className="relative w-40 md:w-[20rem]">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={16}
            />
            <Input placeholder={"جستجو"} className="pl-8" />
          </div>
          <Link
            href={`/store/shoopingCart`}
            className="relative flex md:hidden"
          >
            <ShoppingCart size={18} className=" inset-0" />
            {items.length > 0 && (
              <Badge className="h-5 min-w-5 absolute -top-4 -right-3 transition-all rounded-full text-center p-0 font-mono tabular-nums flex justify-center items-center">
                {items.length}
              </Badge>
            )}
          </Link>
        </div>
      </div>
      <div
        className={`w-full h-12 flex justify-between ${
          isShowBottom ? "hidden md:flex" : "fixed"
        } md:static bottom-0 z-50 items-center md:border-b-2 bg-(--ColorBase)`}
      >
        <div className="w-full h-full md:max-w-7xl mx-auto hidden md:flex justify-between items-center px-2">
          <div className="relative group">
            <span className="flex justify-center items-center gap-1 pb-2 cursor-pointer hover:text-green-700">
              <Menu size={18} />
              دسته بندی 
            </span>
            <div className="z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto absolute top-full transition-opacity duration-300 rounded-2xl flex flex-col gap-4 border w-[65rem] h-[40rem] bg-(--ColorBase)">
              <CateguryOption />
            </div>
          </div>

          <div className="relative group">
            <Link
              href={`/store/shoopingCart`}
              className="flex justify-center  items-center pb-2 cursor-pointer hover:text-green-700"
            >
              <div className="relative">
                <ShoppingCart size={18} className=" inset-0" />
                {items.length > 0 && (
                  <Badge className="h-5 min-w-5 absolute -top-4 -right-3 transition-all rounded-full text-center p-0 font-mono tabular-nums flex justify-center items-center">
                    {items.length}
                  </Badge>
                )}
              </div>

              سبد خرید
            </Link>
            {items.length > 0 && (
              <div className="z-40 opacity-0 overflow-y-auto pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto absolute top-full transition-opacity duration-300 rounded-2xl flex flex-col gap-4 border w-[30rem] max-h-120 bg-(--ColorBase)">
                <ShoppingCard isShow={true} />
              </div>
            )}
          </div>

          <Link className="hover:text-green-700" href="#bestSeller">
            بیشترین فروش
          </Link>
          <Link className="hover:text-green-700" href="./">
            درباره ما
          </Link>
          <Link className="hover:text-green-700" href="./">
            سوال از ما
          </Link>
        </div>
        <div className="w-full h-full md:max-w-7xl text-xs mx-auto text-muted-foreground grid grid-cols-5 md:hidden justify-between items-center border-t">
          <Link
            href={`/store/categories`}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Grid3x3 size={18} />
            <span>ذسته بندی </span>
          </Link>

          <Link href="./">
            <div className="flex flex-col items-center justify-center">
              <Tags size={18} />
              <span>پیشنهاد شگفت انگیز</span>
            </div>
          </Link>
          <Link
            href={`/store/shoopingCart`}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <ShoppingCart size={18} />
            <span>سبد خرید</span>
          </Link>
          <Link href="./">
            <div className="flex flex-col items-center justify-center">
              <Info size={18} />
              <span>درباره ما</span>
            </div>
          </Link>
          <Link href="#bestSeller">
            <div className="flex flex-col items-center justify-center">
              <Star size={18} />
              <span>بیشترین فروش</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
