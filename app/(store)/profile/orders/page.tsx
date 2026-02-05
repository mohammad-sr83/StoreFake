"use client";

import EmptyCard from "@/components/store/profile/order/EmptyCard";
import OrderCard from "@/components/store/profile/order/OrderCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [tab, setTab] = useState("in_progress")
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const paramsTab = searchParams.get("activeTab");
  let paramsSearch = searchParams.get("search");

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
        {paramsSearch ? (
          <>
            <div className="relative w-full">
              <Search
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <Input
                placeholder={"search"}
                className="pl-8 pr-8 cursor-pointer"
              />
              <Link
                href={pathname}
                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-full bg-gray-400 dark:bg-gray-800"
              >
                <X size={18} />
              </Link>
            </div>
            <div className="min-h-[20rem]"></div>
          </>
        ) : (
          <>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg font-bold pb-3">لیست سفارش ها</span>
              <Link href={"?search=true"} className="cursor-pointer">
                <Search />
              </Link>
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
                <TabsList className="w-full flex justify-between md:justify-start gap-2 bg-transparent flex-nowrap overflow-x-auto overflow-y-hidden  border-b pb-5 rounded-none py-2 mb-6 hide-scrollbar">
                  <TabsTrigger
                    value="in_progress"
                    className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
                  >
                    در حال بررسی
                  </TabsTrigger>
                  <TabsTrigger
                    value="sent"
                    className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
                  >
                    ارسال شده
                  </TabsTrigger>
                  <TabsTrigger
                    value="returned"
                    className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
                  >
                    برگشت خورده
                  </TabsTrigger>
                  <TabsTrigger
                    value="canseled"
                    className="text-sm data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-red-500 rounded px-6 shadow-none"
                  >
                   کنسل شده
                  </TabsTrigger>
                </TabsList>

                <div className="flex justify-center overflow-hidden">
                  <TabsContent value="in_progress" className="w-full h-full">
                    <EmptyCard />
                  </TabsContent>
                  <TabsContent value="sent" className="w-full h-full">
                    <div className="w-full h-full flex justify-start items-center flex-col">
                      <OrderCard
                        status="تحویل شده"
                        date="۱۸ مهر ۱۳۹۸"
                        orderCode="۷۲۸۸۶۳۱۰"
                        totalPrice="۳,۳۳۰,۰۰۰"
                        points={150}
                        images={[
                          "https://dkstatics-public.digikala.com/digikala-products/8915.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
                        ]}
                        invoiceUrl="#"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="returned" className="w-full h-full">
                    <EmptyCard />
                  </TabsContent>
                  <TabsContent value="canseled" className="w-full h-full">
                    <div className="w-full h-full flex justify-start items-center flex-col">
                      <OrderCard
                        status="لغو شده"
                        date="۱۸ مهر 1400"
                        orderCode="۷۲۸۸۶۳۱۰"
                        totalPrice="۳۳۰,۰۰۰"
                        points={150}
                        images={[
                          "https://dkstatics-public.digikala.com/digikala-products/116706187.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
                          "https://dkstatics-public.digikala.com/digikala-products/119585067.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
                        ]}
                        invoiceUrl="#"
                      />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
