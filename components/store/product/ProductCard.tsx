import { TCartItem } from "@/lib/Type/Type";
import { useCartStore } from "@/store/useCartStore";

type ProductCardProps = {
  id: string | number;
  title: string;
  model: string;
  color: string;
  image: string;
  price: number;
  oldPrice?: number;
  stock: number;
  locale?: "fa-IR" | "en";
  showImg?: boolean;
  
};

export default function ProductCard({
  id,
  title,
  showImg,
  color,
  image,
  price,
  oldPrice,
  stock,
  locale = "fa-IR",
}: ProductCardProps) {
  const { addItem } = useCartStore();
  let numProduct = 0;

  const handlerClick = () => {
    const newItem = {
      id,
      title,
      price,
      photo: image,
      discount: oldPrice,
      quantity: numProduct + 1,
      totalOriginalPrice:oldPrice,
      color
    };
    addItem(newItem as TCartItem);
  };

  return (
    <>
      <div className="w-full h-1/2 max-w-sm sticky top-1 self-start hidden rounded-2xl border p-4 shadow-md md:flex flex-col justify-between gap-3">
        <div className="flex justify-center items-center">
          <>
            <h3 className="text-sm text-start font-medium line-clamp-2">
              {title}
            </h3>
          </>
          {showImg && (
            <img
              src={image}
              alt={title}
              className="object-contain w-1/2 h-full"
            />
          )}
        </div>

        <div className="flex justify-end items-center gap-1 text-sm">
          <span
            className="w-3 h-3 rounded-full border"
            style={{ backgroundColor: color }}
          />
          {color}
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          {oldPrice && (
            <span className="text-xs text-gray-500 line-through">
              {oldPrice.toLocaleString(locale)} تومان
            </span>
          )}
          <span className="text-lg font-bold text-red-600">
            {price.toLocaleString(locale)} تومان
          </span>
        </div>

        {stock > 0 ? (
          <p className="text-xs text-red-500">
            🔥 تنها {stock} عدد در انبار باقی مانده
          </p>
        ) : (
          <p className="text-xs text-gray-400">ناموجود</p>
        )}

        <button
          className="w-full bg-red-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer hover:bg-red-600 transition"
          onClick={handlerClick}
        >
          افزودن به سبد خرید
        </button>
        {!showImg && (
          <>
            <div className="h-[2rem] flex flex-col gap-1 border-t pt-2 justify-between text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-blue-500">🚚</span> ارسال سریع لمونو
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">📦</span> توسط لمونو
              </span>
            </div>
            <div className="flex items-center gap-2 border-t pt-2 text-xs text-purple-600">
              <span>🎁 ۸۵ امتیاز لمونو</span>
            </div>
          </>
        )}
      </div>

      {!showImg && (
        <div className="w-full bg-(--ColorBase) h-auto flex flex-col gap-2 md:hidden fixed bottom-0 p-3 z-[72] shadow-lg">
          <div className="flex justify-between items-center">
            <button
              className="w-1/2 bg-red-500 text-white py-2 rounded-xl text-sm font-medium cursor-pointer hover:bg-red-600 transition"
              onClick={handlerClick}
            >
              افزودن به سبد خرید
            </button>
            <div className="flex flex-col items-start justify-end gap-1">
              {oldPrice && (
                <span className="text-xs text-gray-500 line-through">
                  {oldPrice.toLocaleString(locale)} تومان
                </span>
              )}
              <span className="text-lg font-bold text-red-600">
                {price.toLocaleString(locale)} تومان
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
