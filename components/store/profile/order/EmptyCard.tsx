
import React from "react";

export default function EmptyCard() {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-2">
        <img
          src="https://www.digikala.com/statics/img/svg/profile/order-empty.svg"
          className="size-52"
        />
        <span>ایتمی برای نمایش وجود ندارد</span>
      </div>
    </div>
  );
}
