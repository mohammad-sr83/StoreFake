"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ShoppingCard from "./Shopping/ShoppingCard";

export default function DialogShoppingCard({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const array = [
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/bf3b67471337c7f0fc485c8e193e7fa7e0faba2d_1727606657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - نات اکتیو",
    },
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c566fc253a28b768fff081fc011b8650245fa7e7_1745016324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title: "هدفون بلوتوثی مدل Airpods Pro 2025",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="max-w-(--breakpoint-xl) h-screen overflow-y-auto"
      >
        <DialogHeader>
          <h3>سبد خرید</h3>
        </DialogHeader>

        <div className="py-4 flex justify-center items-center">
          {array.length > 0 ? (
            <ShoppingCard  isModal={true} />
          ) : (
            <span>سبد خرید شما خالی است</span>
          )}
        </div>

        <DialogFooter className="mt-4">
          <Button variant="default" onClick={() => setOpen(false)}>
          بیرون
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
