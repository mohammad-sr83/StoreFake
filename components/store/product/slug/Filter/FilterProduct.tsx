import { FilterItem } from "./RenderFilter";
import { useFilterStore } from "@/store/useFilterStore";

export const filtersData = [
  {
    id: "color",
    label: "رنگ",
    type: "color",
    options: [
      { id: 1, label: "قرمز", value: "#f00" },
      { id: 2, label: "آبی", value: "#00f" },
      { id: 3, label: "سبز", value: "#0f0" },
    ],
  },
  {
    id: "fastDelivery",
    label: "ارسال سریع",
    type: "switch",
  },
  {
    id: "rangeprice",
    label: "رنج قیمت",
    type: "Range",
    min: 10,
    max: 50,
  },
  {
    id: "priceRange",
    label: "محدوده قیمت",
    type: "checkbox",
    options: [
      { id: 1, label: "زیر ۵۰۰ هزار تومان" },
      { id: 2, label: "۵۰۰ تا ۱ میلیون تومان" },
      { id: 3, label: "بیش از ۱ میلیون تومان" },
    ],
  },
  {
    id: "available",
    label: "فقط کالاهای موجود",
    type: "switch",
  },
  {
    id: "sellers",
    label: "نوع فروشنده",
    type: "multi-checkbox",
    options: [
      { id: 1, label: "فروشنده رسمی" },
      { id: 2, label: "فروشنده شخصی" },
      { id: 3, label: "انبار لمونو" },
    ],
  },
];

export default function FilterProduct() {
  const { clearFilters } = useFilterStore();

  return (
    <>
      <div
        dir={"rtl"}
        className="w-full max-w-sm text-sm flex-col justify-between gap-3 rounded-lg shadow border p-6 hidden lg:flex sticky self-start top-14"
      >
        <div className="w-full flex justify-between items-center pb-3">
          <h2 className="text-lg">فیلتر ها</h2>
          <div
            onClick={() => clearFilters()}
            className="text-xs text-blue-500 cursor-pointer"
          >
            حذف فیلترها
          </div>
        </div>
        {filtersData.map((filter) => (
          <FilterItem key={filter.id} {...filter} />
        ))}
      </div>
    </>
  );
}
