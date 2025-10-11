import React from "react";

export default function CardShipping() {
  return (
    <div>
      <div className="w-full max-w-sm text-sm hidden md:flex flex-col justify-between gap-3 sticky top-5 rounded-lg border p-6">
        <div className="w-full flex justify-between border-b pb-2 items-center">
          <span className="font-bold">100000 تومان</span>
          <h3 className="text-start font-medium line-clamp-2">قیمت کالاها</h3>
        </div>

        <div className="w-full flex justify-between border-b pb-2 items-center">
          <span className="font-bold">2520000 تومان</span>
          <h3 className="text-start font-medium line-clamp-2">ارسال عادی</h3>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-green-500">5222000 تومان</span>
          <h3 className="text-start text-green-500 font-medium line-clamp-2">
            سود شما از خرید
          </h3>
        </div>

        <button
          className="w-full flex justify-center pt-2 items-center min-h-[2rem] border bg-[var(--ColorBase)] text-red-500 hover:text-white pb-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
        >
          انتخاب زمان ارسال
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 md:hidden bg-white border-t flex justify-end">
        <button
          className="w-1/2 max-w-sm flex justify-center pt-2 items-center min-h-[2.5rem] border bg-[var(--ColorBase)] text-red-500 hover:text-white pb-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition"
        >
          انتخاب زمان ارسال
        </button>
      </div>
    </div>
  );
}
