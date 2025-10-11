"use client";

import HeaderStore from "@/components/store/component/HeaderStore";
import SliderStore from "@/components/store/component/SliderStore";
import ProductInfoBox from "@/components/store/product/FeatureBox";
import ProductCard from "@/components/store/product/ProductCard";

import SliderPhotoProduct from "@/components/store/product/SliderPhoto";
import SimilarGoods from "@/components/store/product/TabComponent/SimilarGoods";
import TabMain from "@/components/store/product/TabMain";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const [color, setColor] = useState("");

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
        <div className={`w-full`}>
          <HeaderStore isShowBottom={true} />
          <div className="w-full md:max-w-7xl mx-auto flex flex-col  items-start pt-3 gap-4">
            <div className="w-full flex items-center p-3">
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
            <div dir="ltr" className="w-full min-h-[10rem] md:min-h-[30rem] grid grid-cols-1 md:grid-cols-[2fr_3fr_3fr] ">
              <div className={`w-full h-full`}>
                <ProductCard
                  id="123"
                  title="هدفون بلوتوثی مدل ایرپادز پرو"
                  model="NEW GLD"
                  color={color}
                  image="https://dkstatics-public.digikala.com/digikala-products/d6518a10b641b32833525b184f518e9ad0a38ec0_1751860865.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                  price={398000}
                  oldPrice={450000}
                  stock={2}
                />
              </div>
              <div className="order-2 md:order-2 w-full h-full">
                <ProductInfoBox
                  title="گوشی موبایل ژیواکو مدل F121"
                  category={[
                    { name: "خانه", href: "/" },
                    { name: "موبایل", href: "/category/mobile" },
                    { name: "ژیواکو", href: "/category/mobile/zhivaco" },
                  ]}
                  rating={3.8}
                  reviews={321}
                  questions={101}
                  colors={["black", "red", "blue"]}
                  selectedColor="black"
                  features={[
                    { key: "فناوری صفحه نمایش", value: "TFT" },
                    { key: "اندازه", value: "1.8 اینچ" },
                    { key: "حافظه داخلی", value: "32MB" },
                    { key: "دوربین", value: "ندارد" },
                    { key: "تعداد سیم کارت", value: "دو" },
                  ]}
                  specsId="product-specs"
                />
              </div>
              <div className="order-1 md:order-3  h-full">
                <SliderPhotoProduct />
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
