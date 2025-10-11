"use client";
import { SectionKey } from "@/lib/Type/Type";
import React, { useState } from "react";

export default function IntroductionTab({
  sectionRefs,
  text,
}: {
  text: string;
  sectionRefs: Record<SectionKey, React.RefObject<HTMLDivElement>>;
}) {
  const [otherShow, setOtherShow] = useState(true);

  return (
    <div
      id="introduction"
      ref={sectionRefs.introduction}
      className="scroll-mt-32 min-h-[20rem] "
    >
      <h2 className="text-xl font-bold mb-4">توضیحات</h2>
      <span
        className={`w-full ${otherShow ? "line-clamp-3" : "line-clamp-none"}`}
      >
        {text}
      </span>
      {text.length > 100 ? (
        otherShow ? (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setOtherShow(false)}
          >
            بیشتر
          </span>
        ) : (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setOtherShow(true)}
          >
            کمتر
          </span>
        )
      ) : (
        <></>
      )}
      <p></p>
    </div>
  );
}
