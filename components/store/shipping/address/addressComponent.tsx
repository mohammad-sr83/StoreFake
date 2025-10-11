"use client";
import { Car, StickyNote } from "lucide-react";
import React, { useState } from "react";
import DialogAddressAdd from "./DialogAddressAdd";


export default function AddressComponent() {
  const [sendMode, setSendMode] = useState(1);
  const [open, setOpen] = useState(false);

  const handlerSelectAddress=()=>{
    if (sendMode !=1) {
      setSendMode(1)
    }else{
      setOpen(true)
    }
  }

  return (
    <div className="w-full h-full border rounded-lg flex justify-between items-center flex-col gap-4 p-3">
      <div
        onClick={handlerSelectAddress}
        className={`w-full min-h-[5rem] border ${
          sendMode == 1 && "border-blue-300"
        } rounded-lg flex justify-between items-center cursor-pointer`}
      >
        <span className="text-blue-400 text-xs h-full p-2 text-nowrap">
          تغییر آدرس
        </span>
        <div className="w-full flex justify-end items-center gap-2 p-2">
          <div className="h-full flex justify-between items-end flex-col gap-2 text-sm">
            <span className="text-blue-400 ">ارسال به آدرس انتخاب شده</span>
            <span>بل سیزرشیرنمیشبدرمینبدر15 ی بیر </span>
          </div>
          <Car />
        </div>
      </div>

      <div
        onClick={() => setSendMode(2)}
        className={`w-full min-h-[5rem]  border ${
          sendMode == 2 && "border-blue-300"
        } rounded-lg flex justify-between items-center cursor-pointer`}
      >
        <div className="w-full flex justify-end items-center gap-2 p-2">
          <div className="h-full flex justify-between items-end flex-col gap-2 text-sm">
            <span>دریافت حضوری</span>
            <span>
              قم، خیابان طالقانی، نرسیده به طالقانی ۶۱، روبه روی طالقانی ۹۰،
              دیلی مارکت ۱۱۲۴
            </span>
          </div>
          <StickyNote />
        </div>
      </div>
      <DialogAddressAdd  open={open} setOpen={setOpen} />
    </div>
  );
}
