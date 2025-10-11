"use client";

import { useState } from "react";
import MainLinkCategury from "./CateguryMain/MainLinkCategury";
import SelectSidebar from "./CateguryMain/SelectSidebar";

export default function CateguryOption() {
  const [indexShow, setIndexShow] = useState<number>(1);

  // function renderCategory() {
  //   switch (indexShow) {
  //     case 1:
  //       return <span>{t("laptopCategory")}</span>;
  //     case 2:
  //       return <span>{t("foodCategory")}</span>;
  //     case 3:
  //       return <span>{t("clothingCategory")}</span>;
  //     case 4:
  //       return <span>{t("plantCategory")}</span>;
  //     default:
  //       return <span className="text-gray-400">الان نیستش</span>;
  //   }
  // }

  return (
    <div className="w-full h-full grid grid-cols-[1fr_4fr] items-center">
      <SelectSidebar indexShow={indexShow} setIndexShow={setIndexShow} />

      <MainLinkCategury indexShow={indexShow}/>

      {/* {renderCategory()} */}
    </div>
  );
}
