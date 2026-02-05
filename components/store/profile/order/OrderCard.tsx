"use client";

import { CheckCircle, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface OrderCardProps {
  status: "تحویل شده" | "در حال پردازش" | "لغو شده" | "مرجوع شده";
  date: string;
  orderCode: string;
  totalPrice: string;
  points?: number;
  images: string[];
  invoiceUrl?: string;
}

export default function OrderCard({
  status,
  date,
  orderCode,
  totalPrice,
  points,
  images,
  invoiceUrl,
}: OrderCardProps) {
  const statusColor =
    status === "ارسال" as any
      ? "text-green-600"
      : status ==="در حال پردازش"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="border rounded-xl p-4 bg-white w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className={cn("w-5 h-5", statusColor)} strokeWidth={2} />
          <span className={cn("font-medium", statusColor)}>{status}</span>
        </div>

        <div className="text-sm text-muted-foreground">
          {date} • کد سفارش {orderCode}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex flex-col gap-1">
          <div className="text-muted-foreground text-sm">قیمت</div>
          <div className="font-semibold text-lg">
            {totalPrice}تومان 
          </div>
          {points && (
            <div className="text-xs text-blue-600 mt-1">
              امتیاز دیجی‌کلاب: {points}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {images.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="w-16 h-16 relative rounded-md overflow-hidden border"
            >
              <img src={src} alt={`product-${i}`} className="object-contain" />
            </div>
          ))}
          {images.length > 3 && (
            <div className="w-16 h-16 flex items-center justify-center border rounded-md text-sm bg-gray-50">
              +{images.length - 3}
            </div>
          )}
        </div>
      </div>

      {invoiceUrl && (
        <div className="flex justify-start mt-4">
          <Link
            href={invoiceUrl}
            className="text-sky-600 text-sm flex items-center gap-1 hover:underline"
          >
            <FileText className="w-4 h-4" />
            نمایش فاکتور
          </Link>
        </div>
      )}
    </div>
  );
}
