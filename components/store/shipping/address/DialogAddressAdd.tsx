"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import "leaflet/dist/leaflet.css";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import CardShowAddress from "./CardShowAddress";
import SaveAddressComponent from "./SaveAddressComponent";
import PersonGetAddress from "./PersonGetAddress";
import MapComponent from "@/components/MapLeftet/MapLeftet";

export default function DialogAddressAdd({
  open,
  setOpen,
  isShowList,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isShowList?: boolean;
}) {
  const [step, setStep] = useState<
    "list" | "map" | "custom" | "saveAddress" | "PersonAddress"
  >(isShowList ? "saveAddress" : "list");
  const [lat, setLat] = useState<string | number>("");
  const [lng, setLng] = useState<string | number>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (isShowList) {
      setStep("saveAddress");
    } else {
      // setStep("list");
    }
    setAddress("");
  }, [open]);

  useEffect(() => {
    if (step === "map") {
      setAddress("");
    }
  }, [step]);

  const handlerClick = () => {
    setStep("saveAddress");
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`
    p-0 z-[71]
    sm:p-3
    ${step === "map" ? "sm:max-w-5xl" : "sm:max-w-xl"}
    w-[100vw] h-[100vh] max-w-none sm:h-auto
    flex justify-between flex-col
  `}
        >
          <DialogHeader className="w-full flex justify-center items-center pt-3">
            <DialogTitle className="w-full relative flex justify-center items-center">
              {step === "list"
                ? "آدرس‌های شما"
                : step === "map"
                ? "انتخاب از نقشه"
                : "افزودن آدرس جدید"}
              <button
                className=" absolute left-1 top-1 border-none"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </DialogTitle>
          </DialogHeader>
          <Separator className={` bg-slate-300 dark:bg-black/30`} />
          {!isShowList && step === "list" && (
            <div className="w-full min-h-[10rem]">
              <CardShowAddress />
            </div>
          )}
          {step === "map" && (
            <div className="w-full md:w-[40rem] lg:w-[62rem] h-full overflow-hidden">
              <MapComponent
                fillLat="Lat"
                fillLng="Lng"
                setvalue={(data) => (setLng(data.Lng), setLat(data.Lat))}
              />
            </div>
          )}
          {step === "saveAddress" && (
            <div className="w-full h-full">
              <SaveAddressComponent
                setLat={setLat}
                setLng={setLng}
                lat={lat}
                lng={lng}
                setStep={setStep}
                address={address}
                setAddress={setAddress}
              />
            </div>
          )}
          {step === "PersonAddress" && (
            <div className="w-full h-full">
              <PersonGetAddress
                lat={lat}
                lng={lng}
                setStep={setStep}
                address={address}
                setAddress={setAddress}
              />
            </div>
          )}

          <Separator className={`bg-slate-300 dark:bg-black/30`} />
          <DialogFooter className="w-full cursor-pointer px-2">
            {!isShowList && step === "list" && (
              <div
                onClick={() => setStep("map")}
                className="w-full min-h-[2rem] flex justify-start text-red-500 items-start"
              >
                <Plus />
                <span>اضافه کردن ادرس</span>
              </div>
            )}
            {step === "map" && (
              <div className="w-full flex flex-col sm:flex-row justify-between text-red-500 items-center gap-2">
                <button
                  className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
                  onClick={handlerClick}
                >
                  ذخیره نقشه
                </button>
                <button
                  className="w-full bg-(--ColorBase) border text-(--ColorContrary) py-2 rounded-lg text-sm font-medium cursor-pointer  transition"
                  onClick={() => {
                    setStep("saveAddress");
                  }}
                >
                  برگشت
                </button>
              </div>
            )}
            {step === "PersonAddress" && (
              <div className="w-full flex flex-col sm:flex-row justify-between text-red-500 items-center gap-2">
                <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition">
                 تایید و ادامه
                </button>
                <button
                  className="w-full bg-(--ColorBase) border text-(--ColorContrary) py-2 rounded-lg text-sm font-medium cursor-pointer  transition"
                  onClick={() => {
                    setStep("saveAddress");
                  }}
                >
                  برگشت
                </button>
              </div>
            )}
            {step === "saveAddress" && (
              <div className="w-full flex flex-col sm:flex-row justify-between text-red-500 items-center gap-2">
                <button
                  className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
                  onClick={() => {
                    if (step === "saveAddress") {
                      setStep("PersonAddress");
                    } else {
                      setStep("saveAddress");
                    }
                  }}
                >
                  تایید و ادامه
                </button>
                <button
                  className="w-full bg-(--ColorBase) border text-(--ColorContrary) py-2 rounded-lg text-sm font-medium cursor-pointer  transition"
                  onClick={() => {
                    if (step === "saveAddress") {
                      setStep("map");
                    }
                  }}
                >
                  برگشت
                </button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
