"use client";
import { useCartStore } from "@/store/toolsStore/useCartStore";
import {
  CarFront,
  Gauge,
  MinusIcon,
  MoreVertical,
  PlusIcon,
  Shield,
  SquareChartGantt,
  Store,
  Trash2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function ShoppingCard({
  isModal,
  isShow,
}: {
  isModal?: boolean;
  isShow?: boolean;
}) {
  const { items, clearCart, totalPrice, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  return (
    <div
      className={`w-full h-full justify-start items-center p-4 grid grid-cols-1 relative rounded-lg ${
        isShow ? "border-0" : "border-2 shadow-md"
      } ${
        resolvedTheme == "dark" ? " border-slate-800" : "border-slate-300"
      } gap-3`}
    >
      <div className="h-full flex justify-between items-center">
        <h2 className="text-xl">سبد خرید:</h2>
              </div>

      <div>
        {items.map((cart:any) => (
          <div
            key={cart.id}
            className={`w-full h-2/3 grid grid-cols-[1fr_4fr] justify-start items-center border-b p-3 gap-1 ${
              resolvedTheme == "dark" ? " border-slate-800" : "border-slate-300"
            }`}
          >
            <div className="h-full w-full flex justify-start items-center flex-col gap-4">
              <img
                className="h-1/2 w-full object-contain rounded-2xl"
                src={cart.photo}
                alt={cart.title}
              />
              <div className="w-1/2 flex justify-center items-center">
                <div className="flex items-center gap-2 border rounded-md px-2 py-1 w-28 justify-between">
                  <button
                    className="text-lg font-bold text-Secendery hover:text-SecenderyHover"
                    onClick={() => increaseQuantity(cart.id)}
                  >
                    <PlusIcon size={15} />
                  </button>
                  <span>{cart.quantity}</span>
                  <button
                    className="text-lg font-bold text-red-600 hover:text-red-800"
                    onClick={() => decreaseQuantity(cart.id)}
                  >
                    {cart.quantity === 1 ? (
                      <Trash2 size={15} />
                    ) : (
                      <MinusIcon size={15} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-between items-start sm:gap-3 flex-col text-Side-bar-text">
              <h2 className="line-clamp-1 text-sm py-1 sm:text-lg text-(--ColorContrary)">
                {cart.title}
              </h2>
              <div className="w-full h-2/3 text-xs flex flex-col justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="font-medium">رنگ:</span>
                  <div className="flex gap-3">
                    <button
                      className={`w-4 h-4 rounded-full border-2 transition`}
                      style={{ backgroundColor: `${cart.color}` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={15} />
                  <span className="font-medium">گارانتی 18 ماهه شرکتی </span>
                </div>
                <div className="flex items-center gap-2">
                  <Store size={15} />
                  <span className="font-medium">لمونو</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarFront size={15} />
                  <span className="font-medium">ارسال لمونو</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge size={15} />
                  <span className="font-medium">
                    ارسال سریع دیجی‌کالا (تهران و قم)
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-start items-start gap-2 flex-col">
                {cart.discount && (
                  <span className="text-red-500 text-xs flex justify-center items-center gap-1">
                    {(cart.discount * cart.quantity).toLocaleString(
                      "fa-IR"
                    )}
                    <span className="text-xs">تخفیف</span>
                  </span>
                )}
                <span className="text-xl flex justify-center items-center gap-1 text-(--ColorContrary)">
                  {(cart.price * cart.quantity).toLocaleString(
                    "fa-IR"
                  )}
                  <span className="text-xs">تومان</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isModal && items.length >= 1 && (
        <div className="w-full bg-(--ColorBase) min-h-[3rem] flex flex-col sticky bottom-0 gap-2 p-3 z-[72]">
          <div className="flex justify-between items-center">
            <button
              className="w-1/2 bg-red-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer hover:bg-red-600 transition"
              onClick={() =>
                router.push(`/checkout/shipping`)
              }
            >
              ثبت نهایی
            </button>
            <div className="flex flex-col items-end justify-start gap-1">
              <span className="text-xs text-green-500">جمع سبد خرید شما</span>
              <span className="text-lg font-bold text-red-600">
                {totalPrice.toLocaleString("fa-IR")} تومان
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
