"use client";
import FilterTopProduct from "@/components/store/product/slug/Filter/FilterTopProduct";
import ProductCardLists from "@/components/store/profile/lists/CardLists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [tab, setTab] = useState("favorites");
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramsTab = searchParams.get("activeTab");

  useEffect(() => {
    if (paramsTab) {
      setTab(paramsTab);
    }
  }, [paramsTab]);

  return (
    <div className="w-full h-full flex justify-between items-center flex-col">
      <div
        dir={"rtl"}
        className="w-full border-0 md:border rounded-lg flex justify-between items-center gap-6 py-8 px-5 flex-col"
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold pb-3">لیست مورد علاقه</span>
        </div>
        <div className="w-full gap-2 py-2">
          <Tabs
            dir={ "rtl"}
            value={tab}
            onValueChange={(value) => (
              setTab(value), router.push(`?activeTab=${value}`)
            )}
            className="w-full"
          >
            <TabsList className="w-full flex justify-between md:justify-start gap-2 bg-transparent flex-nowrap overflow-x-auto overflow-y-hidden  border-b pb-2 rounded-none py-2  hide-scrollbar">
              <TabsTrigger
                value="favorites"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
                محبوب ها 
              </TabsTrigger>
              <TabsTrigger
                value="public"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
                عمومی 
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
                انتهاب شده ها
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-center overflow-hidden">
              <TabsContent value="favorites" className="w-full h-full">
                <div className="border-b pb-2">
                  <FilterTopProduct />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                  <ProductCardLists
                    image="https://dkstatics-public.digikala.com/digikala-products/bbd017dd863771487a1ae8fe5eb6a8d3d30398a7_1723373233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                    title="هندزفری ای‌وی مدل TC-6"
                    price={499000}
                    oldPrice={599000}
                    discount={17}
                    timeLeft="۳۷:۵۸:۳۵"
                  />
                </div>
              </TabsContent>
              <TabsContent value="public" className="w-full h-full">
                <div className="w-full flex justify-center items-center">
                  <div className="flex justify-center items-center flex-col gap-2">
                    <img
                      src="https://www.digikala.com/statics/img/svg/wish-list.svg"
                      className="size-52"
                    />
                    <span>لیست خالی هست </span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="announcements" className="w-full h-full">
                <div className="w-full flex justify-center items-center">
                  <div className="flex justify-center items-center flex-col gap-2">
                    <img
                      src="https://www.digikala.com/statics/img/svg/announcements-list-empty.svg"
                      className="size-52"
                    />
                    <span>لیست خالی هست </span>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
