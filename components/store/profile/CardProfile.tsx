"use client";

import {
  Heart,
  HomeIcon,
  MapPin,
  MessageCircle,
  Pencil,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  text: string;
  href: string;
  icon: React.ElementType;
  className?: string;
}

export default function CardProfile() {
  const pathName = usePathname();
  const menuItems: MenuItem[] = [
    {
      text: "نمایش پروفایل",
      href: `/profile`,
      icon: HomeIcon,
    },
    {
      text:"دسته بندی ها",
      href: `/profile/orders`,
      icon: ShoppingBag,
    },
    {
      text:"لیست های مورد علاقه",
      href: `/profile/lists`,
      icon: Heart,
    },
    {
      text: "نظرات",
      href: `/profile/comments`,
      icon: MessageCircle,
    },
    {
      text: "آدرس",
      href: `/profile/addresses`,
      icon: MapPin,
    },
  ];

  return (
    <div
      dir={"rtl"}
      className="w-full max-w-sm flex flex-col justify-between rounded-lg border p-4"
    >
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            Mohammad Soleimanpour
          </h1>
          <span className="text-xs text-gray-500">۰۹۳۳۱۶۹۰۷۸۳۵</span>
        </div>
        <Link
          href={`/profile/edit`}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Pencil size={20} className="text-blue-500" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 pb-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-700 font-medium">
              طلای دیجیتال
            </span>
            <div>
              <Link
                href={``}
                className="text-xs text-blue-500 hover:text-blue-700"
              >
                خرید و فروش
              </Link>
            </div>
          </div>
          <span className="text-sm text-gray-500">- میلی‌گرم</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-700 font-medium">کیف پول</span>
            <div>
              <Link
                href={``}
                className="text-xs text-blue-500 hover:text-blue-700"
              >
               اضافه کردن پول
              </Link>
            </div>
          </div>
          <span className="text-sm text-gray-500">۰ تومان</span>
        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <span className="text-sm text-gray-700 font-medium">دیجی کلاب</span>
          <Link
            href={``}
            className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            مشاهده‌ی مأموریت‌ها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rtl:rotate-180"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm text-gray-700 font-medium">امتیاز</span>
          <span className="text-sm text-gray-500">-</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={item.text}
              href={item.href}
              className={`
          flex items-center gap-3 p-2  hover:bg-gray-50  dark:hover:bg-gray-800 transition
          ${item.className || ""}
          ${isActive ? "border-red-500 border-r-2" : ""}
        `}
            >
              <item.icon className="text-gray-500" size={18} />
              <span className="text-sm ">{item.text}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
