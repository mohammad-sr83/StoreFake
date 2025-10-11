"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  id: number;
  oldPrice?: number;
  rating?: number;
  tag?: string;
  capacity: string;
  dualSim?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
}

export default function ProductCardSearch({
  title,
  image,
  price,
  oldPrice,
  rating,
  tag,
  id,
  capacity,
  dualSim = false,
  borderLeft = true,
  borderRight = true,
}: ProductCardProps) {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link
        href={`/${id}`}
        className={cn(
          "relative flex flex-row-reverse w-full  md:flex-col cursor-pointer gap-1 md:gap-9 items-center justify-between p-3 border bg-white  hover:shadow-2xl hover:border-2",
          {
            "border-l-0": !borderLeft,
            "border-r-0": !borderRight,
          }
        )}
      >
        {tag && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-30">
            {tag}
          </div>
        )}

        <div className="h-full w-1/2 md:w-full  flex flex-col items-center sm:flex-row sm:items-start gap-2">
          <div className="flex-shrink-0 w-full h-full md:h-[13rem] ">
            <img
              src={image}
              alt={title}
              className="object-contain rounded-md w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col h-1/2 items-end text-sm sm:mt-0 sm:ml-2 gap-1">
          <h3 className="md:font-medium line-clamp-2 text-right text-xs md:text-sm">
            {title}
          </h3>
          <p className="text-xs hidden md:inline text-gray-500 mt-1">
            {dualSim ? "دو سیم‌کارت" : "تک سیم‌کارت"}، ظرفیت {capacity}
          </p>
          <div className="w-full mt-2 flex justify-between items-start flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              {rating && (
                <div className="flex items-center gap-0.5 bg-white/80 px-1 rounded">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px]">{rating}</span>
                </div>
              )}
              <span className="text-xs text-gray-500">
                ارسال سریع دیجی کالا
              </span>
            </div>
            <div className="flex justify-between items-start flex-col">
              <span className="font-bold text-xs md:text-sm">
                {price.toLocaleString()} تومان
              </span>
              {oldPrice && (
                <span className="text-[10px] text-gray-400 line-through ml-1">
                  {oldPrice.toLocaleString()}تومان
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
