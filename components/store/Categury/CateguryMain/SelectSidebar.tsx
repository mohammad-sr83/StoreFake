import {
  Car,
  Flower,
  Gem,
  Pencil,
  Shirt,
  Smartphone,
  ToggleRightIcon,
  Utensils,
} from "lucide-react";
import React from "react";

 export const ItemCategory = [
    {
      id: 1,
      name: "موبایل",
      icon: <Smartphone size={15} />,
    },
    {
      id: 2,
      name: "غذا",
      icon: <Utensils size={15} />,
    },
    {
      id: 3,
      name: "پوشاک",
      icon: <Shirt size={15} />,
    },
    {
      id: 4,
      name: "گل وگیاه",
      icon: <Flower size={15} />,
    },
    {
      id: 5,
      name: "طلا و جواهرات",
      icon: <Gem size={15} />,
    },
    {
      id: 6,
      name: "لوازم التحریر",
      icon: <Pencil size={15} />,
    },
    {
      id: 7,
      name: "آرایشی و بهداشتی",
      icon: <Smartphone size={15} />,
    },
    {
      id: 8,
      name: "خودرو و موتور سیکلت",
      icon: <Car size={15} />,
    },
    {
      id: 9,
      name: "ابزار الات",
      icon: <ToggleRightIcon size={15} />,
    },
    {
      id: 7,
      name: "آرایشی و بهداشتی",
      icon: <Smartphone size={15} />,
    },
    {
      id: 8,
      name: "خودرو و موتور سیکلت",
      icon: <Car size={15} />,
    },
    {
      id: 9,
      name: "ابزار الات",
      icon: <ToggleRightIcon size={15} />,
    },
  ];

export default function SelectSidebar({
  indexShow,
  setIndexShow,
}: {
  indexShow: number;
  setIndexShow: React.Dispatch<React.SetStateAction<number>>;
}) {
 

  return (
    <div
      dir="ltr"
      className={`w-full h-full flex justify-start items-center bg-(--ColorChat) flex-col md:gap-3 p-0 md:p-0.5 overflow-x-auto hide-scrollbar`}
    >
      {ItemCategory.map((item, inx) => (
        <div
          key={inx}
          className={`w-full hover:bg-(--ColorBase) pr-1 md:pr-3 text-[10px] md:text-sm hover:text-red-500 ${
            indexShow === item.id && "bg-(--ColorBase) text-red-500"
          } p-0  py-3 md:px-1 flex justify-center md:justify-end items-center text-center cursor-pointer gap-1 border-b md:border-none  flex-col-reverse md:flex-row`}
          onMouseEnter={() => setIndexShow(item.id)}
        >
          {item.name}
          {item.icon}
        </div>
      ))}
    </div>
  );
}
