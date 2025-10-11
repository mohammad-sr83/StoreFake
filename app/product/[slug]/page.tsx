"use client";

import HeaderStore from "@/components/store/component/HeaderStore";
import FilterProduct from "@/components/store/product/slug/FilterProduct";
import MainProduct from "@/components/store/product/slug/MainProduct";



export default function Page() {

  return (
    <>
      <div
        className={`w-full min-h-screen flex flex-col justify-between  items-center mx-auto shadow-lg`}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div
          className={`w-full`}
        >
          <HeaderStore />
          <div className="w-full md:max-w-7xl mx-auto flex flex-col justify-start  items-end py-7 gap-7">
            <h2 className="w-full hidden sm:inline text-right text-lg">آیفون15</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3">
              <MainProduct />
              <div className="w-full hidden md:flex  sticky self-start top-14">
                <FilterProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
