"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import "leaflet/dist/leaflet.css";
import { Edit, LocationEdit, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import FormAddressCustom from "./FormAddressCustom";
import MapComponent from "@/components/MapLeftet/MapLeftet";

export default function DialogAddressAdd({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [step, setStep] = useState<"list" | "map" | "custom">("list");

  useEffect(() => {
    setStep("list");
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${step === "map" ? "sm:max-w-5xl" : "sm:max-w-xl"} p-3`}
        >
          <DialogHeader className="w-full flex justify-between items-center">
            <DialogTitle>
              {step === "list"
                ? "آدرس‌های شما"
                : step === "map"
                ? "انتخاب از نقشه"
                : "افزودن آدرس جدید"}
            </DialogTitle>
          </DialogHeader>
          {step === "list" && (
            <div className="w-full min-h-[10rem]">
              <div
                className={`w-full min-h-[8rem] border border-blue-300  rounded-lg flex justify-between items-center cursor-pointer`}
              >
                <div className="w-full h-full flex justify-start items-start gap-2 p-2">
                  <LocationEdit />
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
                  <Edit />
                </span>
              </div>
            </div>
          )}
          {step === "map" && (
            <div className="w-full h-[500px] overflow-hidden">
              <MapComponent fillLat="Lat" fillLng="Lng" />
            </div>
          )}
          {step === "custom" && (
            <div className="w-full overflow-hidden">
              <FormAddressCustom />
            </div>
          )}
          <DialogFooter className="w-full cursor-pointer">
            {step === "list" && (
              <div
                onClick={() => setStep("map")}
                className="w-full min-h-[2rem] flex justify-start text-red-500 items-start"
              >
                <Plus />
                <span>افزودن آدرس جدید</span>
              </div>
            )}
            {step === "map" && (
              <div className="w-full flex justify-between text-red-500 items-center gap-2">
                <button
                  className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
                  // onClick={handlerClick}
                >
                  ثبت موقعیت مکانی
                </button>
                <button
                  className="w-full bg-(--ColorBase) border text-(--ColorContrary) py-2 rounded-lg text-sm font-medium cursor-pointer  transition"
                  onClick={() => setStep("custom")}
                >
                  ثبت دستی آدرس
                </button>
              </div>
            )}
            {step === "custom" && (
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
                // onClick={handlerClick}
              >
                تایید و ادامه
              </button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
