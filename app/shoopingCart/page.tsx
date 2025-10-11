"use client";
import HeaderStore from "@/components/store/component/HeaderStore";
import SimilarGoods from "@/components/store/product/TabComponent/SimilarGoods";
import ProductShoppingCard from "@/components/store/Shopping/productShoppingCard";
import ShoppingCard from "@/components/store/Shopping/ShoppingCard";
import { useCartStore } from "@/store/toolsStore/useCartStore";

export default function Page() {
  const { items } = useCartStore();

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
          <div className="w-full md:max-w-7xl mx-auto flex flex-col justify-start  items-end  gap-4">
            
              {items.length > 0 ? (
                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-[1fr_3fr] pt-2">
                  <ProductShoppingCard />
                  <ShoppingCard isShow={true} isModal={true} />
                </div>
              ):(
                <div className="w-full flex justify-center items-center flex-col">
                  <img src="https://www.digikala.com/statics/img/svg/empty-cart.svg" className="size-[10rem] object-cover" />
                  <span>!سبد خرید شما خالی است</span>
                  <span className="text-gray-500 text-xs">:می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید</span>
                </div>
              )}
            <div className="flex w-full h-full">
              <SimilarGoods title="محصولاتی که بقیه افراد خرید کردند"/>
            </div>
            <div className="flex w-full h-full">
              <SimilarGoods />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
