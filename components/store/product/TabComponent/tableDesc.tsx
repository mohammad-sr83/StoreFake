"use client";
import React, { useState } from "react";

type Item = {
  key: string;
  value: string;
};

const data: Item[] = [
  { key: "مدل", value: "csdc" },
  { key: "ISBN", value: "csda" },
  { key: "قیمت", value: "sacsscs" },
  { key: "ناشر کتاب", value: "13153131" },
  {
    key: "توضیحات",
    value: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
  },
  { key: "سال انتشار", value: "1403" },
  { key: "زبان", value: "فارسی" },
];

export default function TableDesc() {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 5);

  return (
    <div className="w-full  mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        {visibleData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left font-medium p-2">{item.key}</div>
            <div className="text-right p-2 border-b">{item.value}</div>
          </React.Fragment>
        ))}
      </div>

      {!showAll ? (
        data.length > 5 && (
          <div className="mt-4 flex justify-start">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2  text-blue-500 rounded-lg cursor-pointer transition"
            >
              نمایش بیشتر
            </button>
          </div>
        )
      ) : (
        <div className="mt-4 flex justify-start">
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2  text-blue-500 rounded-lg cursor-pointer transition"
          >
            نمایش کمتر
          </button>
        </div>
      )}
    </div>
  );
}
