'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface CardShopProps {
  photo: string;
  title?: string;
  amazing?: string;
}

export default function CardShop({ photo, title, amazing }: CardShopProps) {

  return (
    <Card
      dir={"rtl"}
      className={`overflow-hidden rounded-2xl ${
        amazing ? `w-[${amazing}] h-[22rem]` : "w-[10rem] h-[22rem]"
      } sm:h-[24rem] sm:w-[14rem]`}
    >
      <img
        src={photo}
        alt={title ?? "محصول"}
        className="w-full h-3/5 object-cover"
      />
      <CardContent className="flex justify-center items-center gap-5 py-2 flex-col">
        <h2 className="line-clamp-2 text-sm ">
          {title ??
            "گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم"}
        </h2>

        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center text-sm">
            <div className="p-1 bg-Secendery rounded-full text-white text-xs">
              {(25).toLocaleString("fa-IR") + "%"}
            </div>
            <span>
              {(123000).toLocaleString("fa-IR")}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="p-1 rounded-full cursor-pointer hover:text-primary">
              <ShoppingCart size={20} />
            </span>
            <span className="text-gray-500 text-left line-through text-sm">
              {(231000).toLocaleString("fa-IR")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
