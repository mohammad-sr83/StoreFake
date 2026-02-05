"use client";

import CardProfile from "@/components/store/profile/CardProfile";
import Link from "next/link";

export default function Page() {
  const ItemArray = [
    {
      id: 1,
      photo: "https://www.digikala.com/statics/img/svg/status-processing.svg",
      title: "۰ سفارش",
      text: "جاری",
      query: "?activeTab=in_progress",
    },
    {
      id: 2,
      photo: "https://www.digikala.com/statics/img/svg/status-delivered.svg",
      title: "1 سفارش",
      text: "تحویل شده",
      query: "?activeTab=sent",
    },
    {
      id: 3,
      photo: "https://www.digikala.com/statics/img/svg/status-returned.svg",
      title: "۰ سفارش",
      text: "مرجوع شده",
      query: "?activeTab=returned",
    },
  ];

  return (
    <div className="w-full h-full flex justify-between items-center flex-col">
      <div
        dir="rtl"
        className="w-full border rounded-lg flex justify-between items-center gap-6 py-8 px-5 flex-col"
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold pb-3 border-b border-red-500">
            سفارش های من
          </span>
          <Link
            href={"profile/orders"}
            className="text-blue-500 text-xs cursor-pointer"
          >
            نمایش بیشتر
          </Link>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 p-2">
          {ItemArray.map((item, index) => (
            <Link
              href={`profile/orders${item.query}`}
              key={item.id}
              className={`w-full flex justify-start items-center flex-col md:flex-row gap-2 ${
                ItemArray.length - 1 != index && "border-l"
              }`}
            >
              <img src={item.photo} />
              <div className="flex justify-between items-start flex-col">
                <span>{item.title}</span>
                <span className="text-xs text-gray-500">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex md:hidden">
        <CardProfile />
      </div>
    </div>
  );
}
