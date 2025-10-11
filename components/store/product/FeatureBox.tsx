"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface ProductInfoBoxProps {
  title: string;
  category: { name: string; href: string }[];
  rating: number;
  reviews: number;
  questions: number;
  colors: string[];
  selectedColor?: string;
  onColorChange?: (color: string) => void;
  features: { key: string; value: string }[];
  specsId?: string;
  setColor?: Dispatch<SetStateAction<string>>
}

export default function ProductInfoBox({
  title,
  category,
  rating,
  reviews,
  questions,
  colors,
  selectedColor,
  onColorChange,
  features,
  setColor,
}: ProductInfoBoxProps) {
  const [showAll] = useState(false);
  const [selected, setSelected] = useState(selectedColor || colors[0]);
  const visibleFeatures = showAll ? features : features.slice(0, 4);

  return (
    <div className="w-full h-full flex flex-col gap-4 px-4 bg-(--ColorBase)">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            {category.map((c, idx) => (
              <div key={idx} className="flex items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink href={c.href}>{c.name}</BreadcrumbLink>
                </BreadcrumbItem>
                {idx < category.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span>⭐ {rating.toFixed(1)}</span>
        <Link
          href="#Reviews"
          className="p-2 bg-(--ColorChat) flex justify-center items-center rounded-full text-black"
        >
          {reviews} دیدگاه <ChevronLeft size={18} />
        </Link>
        <Link
          href="#Questions"
          className="p-2 bg-(--ColorChat) flex justify-center items-center rounded-full text-black"
        >
          {questions} پرسش <ChevronLeft size={18} />
        </Link>
      </div>


      <div className="flex flex-col gap-2">
        <span className="font-medium">رنگ:</span>
        <div className="flex gap-3">
          {colors.map((c) => {
            const isActive = selected === c;
            return (
              <button
                key={c}
                onClick={() => {
                  setSelected(c);
                  onColorChange?.(c);
                  setColor?.(c)
                }}
                className={`w-9 h-9 rounded-full border-2 transition 
                  ${isActive
                    ? "border-black scale-110"
                    : "border-gray-300 opacity-45 hover:border-gray-500"
                  }
                `}
                style={{ backgroundColor: c }}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          {visibleFeatures.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between border rounded px-2 py-1 text-sm"
            >
              <span className="text-gray-500">{f.key}</span>
              <span className="font-medium">{f.value}</span>
            </div>
          ))}
        </div>
        {features.length > 4 && (
          <Link href="#Specifications" className="mt-2 w-full text-center">
            مشاهده همه ویژگی‌ها
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="p-3 border rounded-md bg-(--ColorBase) shadow-sm text-sm leading-6">
          <p className="text-gray-600 text-sm">
            درخواست مرجوع کردن کالا در گروه{" "}
            <span className="font-medium">مدفون، هدست و هنذفری</span> با دلیل
            <span className="font-medium">انصراف از خرید</span>
            تنها در صورتی قابل تأیید است که کالا در شرایط اولیه باشد
            (در صورت پلمپ بودن، کالا نباید باز شده باشد).
          </p>
        </div>

        <div className="p-3 border rounded-md bg-(--ColorBase) shadow-sm text-sm leading-6">
          <h3 className="font-bold text-purple-600 mb-2">
            ارسال رایگان سفارش‌ها برای اعضای پلاس
          </h3>
          <ul className="list-disc pr-5 text-gray-700 space-y-1">
            <li>۴ ارسال رایگان عادی</li>
            <li>۲ ارسال سوپرمارکت</li>
            <li>۴ ارسال رایگان کالاهای سنگین و حجیم</li>
            <li>پشتیبانی اختصاصی</li>
          </ul>
          <div className="mt-2 text-sm text-gray-600">
            ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)
          </div>
          <button className="mt-3 px-4 py-2 rounded bg-purple-600 text-white text-sm">
            خرید اشتراک
          </button>
        </div>
      </div>
    </div>
  );
}
