"use client";
import { Button } from "@/components/ui/button";
import { TCartItem } from "@/lib/Type/Type";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Trash2 } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  timeLeft?: string;
}

export default function ProductCardLists({
  image,
  title,
  price,
  oldPrice,
  discount,
  timeLeft,
}: ProductCardProps) {
  const { addItem } = useCartStore();
  let numProduct = 0;

  const handlerClick = () => {
    const newItem = {
      id: Math.random(),
      title,
      price,
      photo: image,
      discount: oldPrice,
      quantity: numProduct + 1,
      totalOriginalPrice: oldPrice,
    };
    addItem(newItem as unknown as TCartItem);
  };

  return (
    <div className="flex flex-col w-full h-full border rounded-lg overflow-hidden shadow-sm p-3 hover:drop-shadow-xl transition-all duration-200 bg-white">
      <span className="text-red-600 text-sm font-semibold mb-1">
        پیشنهاد شگفت‌انگیز
      </span>

      <div className="flex justify-center mb-3">
        <img
          src={image}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mb-2">ارسال سریع دیجی‌کالا</p>

      <div className="w-full flex items-center justify-between mt-auto">
        <div className="w-full flex items-center justify-center gap-1">
          {discount && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md">
              %{discount}
            </span>
          )}
          <div className="w-full flex flex-col items-end justify-between">
            <span className="text-red-600 font-bold">
              {price.toLocaleString()} تومان
            </span>
            {oldPrice && (
              <span className="text-gray-400 line-through text-xs">
                {oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {timeLeft && (
        <div className="text-xs text-red-600 text-left mt-2">⏰ {timeLeft}</div>
      )}

      <div className="mt-3 flex justify-center items-center gap-1">
        <Button
          variant="outline"
          className="w-1/4 flex items-center justify-center gap-2 border-red-500 text-red-500 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
          حذف
        </Button>
        <Button
          variant="outline"
          className="w-3/4 flex items-center justify-center gap-2"
          onClick={handlerClick}
        >
          <ShoppingCart className="w-4 h-4" />
          اضافه به سبد
        </Button>
      </div>
    </div>
  );
}
