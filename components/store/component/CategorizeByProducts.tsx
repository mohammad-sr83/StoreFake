import Link from "next/link";
import React from "react";

export default function CategorizeByProducts({
  Categurys,
}: {
  Categurys: Array<any>;
}) {

  return (
    <div
      dir={ "rtl"}
      className="w-full h-1/2 flex justify-between items-center mb-3 border-2  rounded-2xl"
    >
      <div
        dir={ "rtl"}
        className="w-full h-1/2 flex justify-between items-center mb-3 rounded-2xl"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-4 content-start relative">
          {Categurys.map((item, index) => (
            <div
              key={item.id}
              className={`w-full h-full flex justify-between items-center ${
                index + 1 != Categurys.length ? "border-b-2" : "border-b-0"
              } md:border-b-0 flex-col gap-2 py-1 px-3 relative`}
            >
              <span>کاور موبایل</span>

              <div className="w-full h-full grid grid-cols-2 relative p-2 gap-4">
                <img src={item.photo} className="object-cover w-full h-full" />
                <img src={item.photo} className="object-cover w-full h-full" />
                <img src={item.photo} className="object-cover w-full h-full" />
                <img src={item.photo} className="object-cover w-full h-full" />

                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100  -translate-y-1/2 z-10" />
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-slate-100 -translate-x-1/2 z-10" />
              </div>

              <Link className="text-Secendery" href="">
               بیشتر
              </Link>

              {index !== 0 && index !== Categurys.length && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-[2px] bg-slate-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
