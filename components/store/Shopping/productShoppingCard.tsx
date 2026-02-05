import { TCartItem } from "@/lib/Type/Type";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function ProductShoppingCard() {
  const { totalOriginalPrice, items, totalPrice, totalProfit } = useCartStore();
  const router = useRouter();
  const handlerClick = () => {
    router.push(`/store/checkout/shipping`);
  };
  return (
    <>
      <div
        className="w-full max-w-sm sticky self-start hidden rounded-2xl border p-4 shadow-md md:flex flex-col justify-between gap-3"
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">
            {totalOriginalPrice.toLocaleString("fa")} تومان
          </span>
          <h3 className="text-sm text-start font-medium line-clamp-2">
            قیمت کالاها ({items.length})
          </h3>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">
            {totalPrice.toLocaleString("fa")} تومان
          </span>
          <h3 className="text-sm text-start font-medium line-clamp-2">
            جمع سبد خرید
          </h3>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-bold text-green-500">
            {totalProfit.toLocaleString("fa")} تومان
          </span>
          <h3 className="text-sm text-start text-green-500 font-medium line-clamp-2">
            سود شما از خرید
          </h3>
        </div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer hover:bg-red-600 transition"
          onClick={handlerClick}
        >
          ثبت نهایی
        </button>
      </div>
      <div className="w-full bg-(--ColorBase) h-auto flex flex-col gap-2 md:hidden fixed bottom-[3rem] p-3 z-[72]">
        <div className="flex justify-between items-center">
          <button
            className="w-1/2 bg-red-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer hover:bg-red-600 transition"
            onClick={handlerClick}
          >
            ثبت نهایی
          </button>
          <div className="flex flex-col items-end justify-start gap-1">
            <span className="text-xs text-green-500">جمع سبد خرید شما</span>
            <span className="text-lg font-bold text-red-600">
              {totalPrice.toLocaleString("fa")} تومان
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
