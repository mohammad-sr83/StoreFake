"use client";

import ImgModal from "@/components/imageModal/ImgModal";
import HeaderStore from "@/components/store/component/HeaderStore";
import SliderStore from "@/components/store/component/SliderStore";
import SimilarGoods from "@/components/store/product/SimilarGoods";
import TabMain from "@/components/store/product/TabMain";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { resolvedTheme} = useTheme();
  const params = useParams();
  const id = params?.id as string | undefined;
  const [isshow, setisshow] = useState(false);
  const [showpic, setshopic] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
          .react-transform-wrapper {
            justify-content: end !important;
          }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full  flex flex-col justify-center items-center mx-auto shadow-lg `}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div
          className={`w-full `}
        >
          <HeaderStore />
          <div className="w-full md:max-w-6xl mx-auto flex flex-col  items-start pt-3 px-3 gap-4">
            <div
              dir={'rtl'}
              className="w-full flex items-center"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/tools/store">
                      محصول با آی دی {id}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="w-full h-1/4 grid grid-cols-1 md:grid-cols-[2fr_3fr_2fr] ">
              <div
                className={`order-3 md:order-1 flex justify-center text-2xl items-center bg-ColorChat flex-col h-full gap-8 ${
                  resolvedTheme=== "dark"
                    ? "text-white"
                    : "text-black border-2 "
                } w-full rounded-2xl`}
              >
                <div className="">
                  {(123000).toLocaleString("fa-IR")}
                </div>
                <div className="w-full flex justify-between items-center p-2">
                  <span className="p-1 bg-blue-600 rounded-full text-white text-sm">
                    {(25).toLocaleString("fa-IR")}%
                  </span>
                  <span>تخفیف</span>
                </div>
                <span className="text-gray-500 text-left line-through">
                  {(231000).toLocaleString("fa-IR")}
                </span>
              </div>
              <div
                dir={"rtl"}
                className="order-2 md:order-2 w-full h-full flex flex-col p-4 gap-4"
              >
                <span className=" text-2xl ">تایتل محصول</span>
                <span>تعداد موجود در انبار :4</span>
                <span>تعداد موجود در انبار :4</span>
                <span>تعداد موجود در انبار :4</span>
              </div>
              <div className="order-1 md:order-3 flex justify-between items-center flex-col gap-4">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={() => (
                    setshopic(
                      "https://dkstatics-public.digikala.com/digikala-products/c2f09960ac13daf55ae8289f56600b1202c8da60_1681126500.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                    ),
                    setisshow(true)
                  )}
                  src="https://dkstatics-public.digikala.com/digikala-products/c2f09960ac13daf55ae8289f56600b1202c8da60_1681126500.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                />
                <ImgModal
                  title="نمایش عکس "
                  value={showpic}
                  setShow={setisshow}
                  showModal={isshow}
                  rounded={false}
                />
              </div>
            </div>
            <div className="hidden md:flex w-full h-full">
              <SimilarGoods />
            </div>
            <SliderStore Height="13" />
            <div className="w-full flex flex-col">
              <TabMain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
