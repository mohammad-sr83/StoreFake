import React from "react";

export default function CardBestSeller({
  item,
}: {
  item: { photo: string; title: string; index: number; number: number };
}) {

  return (
    <div
      className={`w-full flex justify-start text-sm items-center p-2 gap-3 ${
        item.index < 2 && "border-b-2 border-slate-100 "
      }`}
    >
      <div className="flex justify-center items-center gap-3">
        <img className="size-16 object-cover" src={item.photo} />
        <span
          className="font-extrabold text-blue-300"
          style={{ fontSize: "2rem" }}
        >
          {item.number.toLocaleString( "fa-IR")}
        </span>
      </div>
      <span className="text-sm">{item.title}</span>
    </div>
  );
}
