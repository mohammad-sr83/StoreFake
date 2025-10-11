import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ChevronLeft, Grid2x2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MainMobaileCategury() {
  return (
    <div
      className="w-full h-full flex  flex-col gap-6 p-3 pt-6 text-[10px]"
    >
      <Link
        href={""}
        className="w-full text-blue-500 flex justify-start items-start"
      >
        همه محصولات موبایل
        <ChevronLeft size={15} />
      </Link>

      <Accordion type="single" collapsible>
        {[1, 2, 3, 4].map((item) => (
          <AccordionItem key={item} value={`item-${item}`} className="w-full">
            <AccordionTrigger>آیفون</AccordionTrigger>
            <AccordionContent className="w-full grid grid-cols-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <Link
                href={`product/${item}`}
                  key={item}
                  className="h-[5rem] flex justify-start items-center flex-col gap-1"
                >
                  <div className="size-[3rem]  bg-(--ColorChat) rounded-full p-2">
                    <img
                      className="w-full h-full object-cover mix-multiply"
                      src="https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    />
                  </div>
                  <span className="text-[8px]">ایفون 17</span>
                </Link>
              ))}
              <div className="h-[5rem] flex justify-start items-center flex-col gap-1">
                <div className="size-[3rem] flex justify-center items-center  bg-(--ColorChat) rounded-full p-2">
                  <Grid2x2 />
                </div>
                <span className="text-[8px]">همه ی کالا ها</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
