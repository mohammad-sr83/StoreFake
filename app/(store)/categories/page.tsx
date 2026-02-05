"use client";

import MainMobaileCategury from "@/components/store/Categury/CateguryMain/MainMobaileCategury";
import SelectSidebar from "@/components/store/Categury/CateguryMain/SelectSidebar";
import HeaderStore from "@/components/store/component/headerItems/HeaderStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);
  const [indexShow, setIndexShow] = useState<number>(1);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsAllowed(true);
      } else {
        router.back();
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [router]);

  if (!isAllowed) {
    return null;
  }

  return (
    <>
      <div className={`w-full`}>
        <HeaderStore />
        <div className="w-full h-svh overflow-hidden grid grid-cols-[4fr_1fr]">
          <div className="w-full bg-(--ColorBase)">
            <MainMobaileCategury />
          </div>
          <SelectSidebar indexShow={indexShow} setIndexShow={setIndexShow} />
        </div>
      </div>
    </>
  );
}
