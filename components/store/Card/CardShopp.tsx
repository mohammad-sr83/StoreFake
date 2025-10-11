"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TCartItem } from "@/lib/Type/Type";


interface CardShopProps {
  Item: TCartItem;
  amazing?: string;
  index1?: boolean;
  borderFull?:boolean
}

export default function CardShop({ amazing, index1, Item ,borderFull}: CardShopProps) {
  const getDiscountedPrice = (item: TCartItem) => {
    if (!item.discount) return;
    return item.price - (item.price * item.discount) / 100;
  };
  const discountPrice = getDiscountedPrice(Item);

  return (
    <Card
      className={`overflow-hidden flex justify-start gap-2 flex-col sm:h-72 sm:w-56 ${
      borderFull ? 'border-r border-b':  index1 ? "border-none" : " border-r"
      } rounded-none border-gray-200 dark:border-gray-500 shadow-none ${
        amazing ? `w-[${amazing}rem] h-[18rem] sm:w-[10rem] ` : "w-40 h-75"
      } `}
    >
      <img
        src={Item.photo}
        alt={Item.title ?? "محصول"}
        className="w-full h-3/5 object-fit"
      />
      <CardContent className="flex justify-start items-center gap-5 sm:py-2 flex-col ">
        <h2 className="line-clamp-2 min-h-[2rem] text-sm ">
          {Item.title ??
            "گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم"}
        </h2>

        <div className="w-full flex flex-col">
          <div
            className={`w-full flex ${
              Item.discount ? "justify-between" : "justify-end"
            } items-center text-sm`}
          >
            {Item.discount && (
              <div className="p-1 bg-Secendery rounded-full text-white text-xs">
                {Item.discount.toLocaleString("fa-IR") + "%"}
              </div>
            )}
            <span className="text-lg">
              {(Item.price)}<span className="text-xs">تومان</span>
            </span>
          </div>

          <div className="w-full flex justify-end items-center">
            {/* {discountPrice && (
              <span className="text-gray-500 text-left line-through text-sm">
                {discountPrice.toLocaleString( "fa-IR")}
              </span>
            )} */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
