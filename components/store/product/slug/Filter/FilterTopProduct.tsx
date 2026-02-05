import { SortDesc } from "lucide-react";
import Link from "next/link";

export const FilterData = [
  {
    id: 1,
    name: "مرتبط ترین",
    sort: 22,
  },
  {
    id: 2,
    name: "پربازدید ترین",
    sort: 4,
  },
  {
    id: 3,
    name: "جدید ترین",
    sort: 1,
  },
  {
    id: 4,
    name: "پرفروش ترین",
    sort: 7,
  },
  {
    id: 5,
    name: "ارزان ترین",
    sort: 20,
  },
  {
    id: 6,
    name: "گران ترین",
    sort: 21,
  },
  {
    id: 7,
    name: "سریع ترین ارسال",
    sort: 25,
  },
  {
    id: 9,
    name: "پیشنهاد خریداران",
    sort: 29,
  },
  {
    id: 8,
    name: "منتخب",
    sort: 27,
  },
];

export default function FilterTopProduct() {
  return (
    <div className="w-full hidden lg:flex justify-end items-center gap-2 p-2 py-4 overflow-auto hide-scrollbar">
      <div className="flex text-nowrap justify-center items-center text-xs">
        <SortDesc size={15} className="ml-1" />
        مرتب سازی :
      </div>
      <div className="w-full flex overflow-auto justify-start items-center gap-3 text-gray-500 overflow-x-auto scrollbar-hide">
        {FilterData.map((item) => (
          <Link
            key={item.id}
            className="text-xs whitespace-nowrap"
            href={`?sort=${item.sort}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <span className="text-gray-500 text-xs text-nowrap">30 کالا</span>
    </div>
  );
}
