"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, LocationEdit, MoreVertical, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function CardShowAddress({
  setOpen,
}: {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {

  return (
    <>
      <div
        className={`w-full min-h-[8rem] border border-blue-300  rounded-lg flex justify-between items-center cursor-pointer`}
      >
        <div className="w-full h-full flex justify-start items-start gap-2 p-2">
          <LocationEdit className="fill-blue-300" />
          <div className="h-full flex justify-between items-start flex-col gap-2 text-sm">
            <span className="text-blue-300">
              بل پانزده خرداد، بعد از بل روحانی، خ. قربانی
            </span>
            <span>کد پستی: {3713135131551}</span>
            <div className="w-full flex justify-end items-center">
              <div> گیرنده: mohammad soleimanpour </div>
              <span>۰۹۳۳۴۹۰۷۸۳۵</span>
            </div>
          </div>
        </div>
        <span className="text-blue-400 text-xs h-full p-2 text-nowrap">
          {setOpen ? (
            <DropdownMenu dir={"rtl"}>
              <DropdownMenuTrigger>
                <MoreVertical size={18} className="fill-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setOpen(true)}
                  className="w-full flex justify-start items-center"
                >
                  <Edit />
                  <div className="text-xs">ویرایش آدرس</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex text-red-600 justify-start items-center">
                  <Trash2 className="w-4 h-4" />
                  <div className="text-xs">حذف آدرس</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Edit />
          )}
        </span>
      </div>
      {/* <div
        onClick={() => setStep("map")}
        className="w-full min-h-[2rem] flex justify-start text-red-500 items-start"
      >
        <Plus />
        <span>افزودن آدرس جدید</span>
      </div> */}
    </>
  );
}
