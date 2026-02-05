"use client";

import CardShowAddress from "@/components/store/shipping/address/CardShowAddress";
import DialogAddressAdd from "@/components/store/shipping/address/DialogAddressAdd";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full flex justify-between items-center flex-col">
        <div
          className="w-full border-0 md:border rounded-lg flex justify-between items-center gap-6 py-8 px-5 flex-col"
        >
          <div className="w-full flex justify-between items-center">
            <span className="text-lg font-bold pb-3 border-b border-red-500">
              آدرس ها
            </span>
            <span
              onClick={() => setOpen(true)}
              className="text-red-500 text-sm cursor-pointer"
            >
              اضافه کردن آدرس +
            </span>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
            <CardShowAddress setOpen={setOpen} />
          </div>
        </div>
      </div>
      <DialogAddressAdd open={open} setOpen={setOpen} isShowList={true} />
    </>
  );
}
