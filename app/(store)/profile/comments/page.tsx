"use client";
import CardComment from "@/components/store/profile/comment/CardComment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [tab, setTab] = useState("pending");
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
        dir={ "rtl"}
        className="w-full border-0 md:border rounded-lg flex justify-between items-center gap-6 py-8 px-5 flex-col"
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold pb-3">نمایش نظرات</span>
        </div>
        <div className="w-full gap-2 py-2">
          <Tabs
            dir={"rtl"}
            value={tab}
            onValueChange={(value) => (
              setTab(value), router.push(`?activeTab=${value}`)
            )}
            className="w-full"
          >
            <TabsList className="w-full flex justify-between md:justify-start gap-2 bg-transparent flex-nowrap overflow-x-auto overflow-y-hidden  border-b pb-5 rounded-none py-2 mb-6 hide-scrollbar">
              <TabsTrigger
                value="pending"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
                در حال بررسی
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
               نظرات
              </TabsTrigger>
              <TabsTrigger
                value="questions"
                className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
              >
                سوال ها
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-center overflow-hidden">
              <TabsContent value="pending" className="w-full h-full">
                <div className="w-full flex justify-center items-center">
                  <div className="flex justify-center items-center flex-col gap-2">
                    <img
                      src="https://www.digikala.com/statics/img/svg/favorites-list-empty.svg"
                      className="size-52"
                    />
                    <span>نظری وجود ندارد</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="comments" className="w-full h-full">
                <div className="w-full flex justify-center items-center flex-col">
                  <CardComment
                    productName="پرینتر چندکاره لیزری کانن مدل i-SENSYS MF3010"
                    productImage="https://dkstatics-public.digikala.com/digikala-products/8915.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    rating={3}
                    comment="عالی و کاربردی"
                    userName="مشتری • ۲۸ مهر ۱۴۰۴"
                    date="۲۸ مهر ۱۴۰۴"
                    verified
                  />
                </div>
              </TabsContent>
              <TabsContent value="questions" className="w-full h-full">
                <div className="w-full flex justify-center items-center flex-col">
                  <CardComment
                    productName="پرینتر چندکاره لیزری کانن مدل i-SENSYS MF3010"
                    productImage="https://dkstatics-public.digikala.com/digikala-products/8915.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    rating={3}
                    comment="چرا اینجوریه ؟ "
                    userName="مشتری • ۲۸ مهر ۱۴۰۴"
                    date="۲۸ مهر ۱۴۰۴"
                    verified
                    isQuestion={true}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
