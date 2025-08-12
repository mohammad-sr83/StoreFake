import React, { useState } from "react";
import { X, CirclePlusIcon, CircleMinusIcon } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ShoppingCard({
  photo,
  isModal,
  isShow,
}: {
  photo: Array<{ title: string; photo: string }>;
  isModal?: boolean;
  isShow?: boolean;
}) {
  const { resolvedTheme} = useTheme();
  const [quantities, setQuantities] = useState<number[]>(photo.map(() => 1));

  const handleIncrease = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <div
      dir={"rtl"}
      className={`w-full justify-between items-center p-4 grid grid-cols-1 rounded-lg ${
        isShow ? "border-0" : "border-2 shadow-md"
      } ${resolvedTheme== "dark" ? " border-slate-800" : "border-slate-300"} gap-3`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl">سبد خرید:</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <X className="w-4 h-4 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>حذف همه</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className={`grid ${
          isModal ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        } gap-3`}
      >
        {photo.map((item, index) => (
          <div
            key={index}
            className={`h-[12rem] md:h-[19rem] w-full flex justify-start items-center border-2 rounded-2xl p-3 gap-2 ${
              resolvedTheme== "dark" ? " border-slate-800" : "border-slate-300"
            }`}
          >
            <img
              className="h-full w-1/2  object-contain rounded-2xl"
              src={item.photo}
            />
            <div className="w-full h-full flex justify-between items-start sm:gap-5  flex-col">
              <h2 className="line-clamp-2 text-sm sm:text-lg ">
                {item.title ? item.title : "هندزفری کیو کی زد مدل AK6 Type C"}
              </h2>

              <div className="w-full flex justify-between items-start  gap-3">
                <div className="p-1 bg-Secendery rounded-full text-white text-xs sm:text-sm">
                  { (25).toLocaleString("fa-IR")}%
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <X className="w-4 h-4 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>حذف از سبد خرید</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="w-full flex justify-center items-center">
                <div className="flex items-center gap-2 border rounded-md px-2 py-1 w-28 justify-between">
                  <button
                    className="text-lg font-bold text-Secendery hover:text-SecenderyHover"
                    onClick={() => handleIncrease(index)}
                  >
                    <CirclePlusIcon fontSize="small" />
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    className="text-lg font-bold text-red-600 hover:text-red-800"
                    onClick={() => handleDecrease(index)}
                  >
                    <CircleMinusIcon fontSize="small" />
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-between items-end  gap-5">
                <span>
                  {(123000 * quantities[index]).toLocaleString(
                    "fa-IR"
                  )}
                </span>
                <span className="text-gray-500 text-left line-through">
                  {(231000 * quantities[index]).toLocaleString(
                    "fa-IR"
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className=" h-12 bg-Secendery hover:bg-SecenderyHover rounded-2xl text-white text-sm">
        ثبت نهایی
      </Button>
    </div>
  );
}
