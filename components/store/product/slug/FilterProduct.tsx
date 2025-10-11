import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FilterProduct() {

  return (
    <div
      className="w-full max-w-sm text-sm flex flex-col justify-between gap-3 rounded-lg shadow border p-6"
    >
      <div className="w-full flex justify-between items-center pb-3">
        <h2 className="text-lg">فیلترها</h2>
        <Link href={""} className="text-xs text-blue-500">
          حذف فیلترها
        </Link>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="pt-0">رنگ</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link
                  href={``}
                  key={item}
                  className="flex flex-col items-center justify-center border rounded-md p-2 aspect-square hover:bg-muted transition"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    />
                  </div>
                  <span className="text-[10px] mt-1 text-center">آیفون 17</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full flex justify-between items-center border-b pb-3">
        <h2>ارسال سریع</h2>
        {/* <Switch dir="ltr" /> */}
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger className="pt-0">محدوده قیمت</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link
                  href={``}
                  key={item}
                  className="flex flex-col items-center justify-center border rounded-md p-2 aspect-square hover:bg-muted transition"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    />
                  </div>
                  <span className="text-[10px] mt-1 text-center">آیفون 17</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full flex justify-between items-center border-b pb-3">
        <h2>فقط کالاهای موجود</h2>
        {/* <Switch dir="ltr" /> */}
      </div>

      <div className="w-full flex justify-between items-center border-b pb-3">
        <h2>کالاهای انبار لمونو</h2>
        {/* <Switch dir="ltr" /> */}
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" className="w-full ">
          <AccordionTrigger className="pt-0">نوع فروشنده</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link
                  href={``}
                  key={item}
                  className="flex flex-col items-center justify-center border rounded-md p-2 aspect-square hover:bg-muted transition"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                    />
                  </div>
                  <span className="text-[10px] mt-1 text-center">آیفون 17</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full flex justify-between items-center">
        <h2>خرید حضوری در تهران</h2>
        {/* <Switch dir="ltr" /> */}
      </div>
    </div>
  );
}
