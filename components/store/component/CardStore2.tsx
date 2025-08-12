
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function CardShopBestSeller({ photo }: { photo: string }) {

  return (
   <Card
      dir={"rtl"}
      className=":h-[15rem] sm:w-[10rem]"
    >
      <img
        src={photo}
        alt={"محصول"}
        className="w-full h-3/5 rounded-t-xl object-cover"
      />
      <CardContent className="flex justify-center items-center gap-5 py-2 flex-col">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center text-sm">
            <div className="p-1 bg-Secendery rounded-full text-white text-xs">
              {(25).toLocaleString( "fa-IR") + "%"}
            </div>
            <span>
              {(123000).toLocaleString( "fa-IR")}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="p-1 rounded-full cursor-pointer hover:bg-green-600">
              <ShoppingCart size={20} />
            </span>
            <span className="text-gray-500 text-left line-through text-sm">
              {(231000).toLocaleString( "fa-IR")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

