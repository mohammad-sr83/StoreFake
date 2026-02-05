"use client";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreVertical, Star, Trash2 } from "lucide-react";


type CardCommentProps = {
  productName: string;
  productImage: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  verified?: boolean;
  isQuestion?: boolean;
};

export default function CardComment({
  productName,
  productImage,
  rating,
  comment,
  userName,
  date,
  verified = false,
  isQuestion = false,
}: CardCommentProps) {

  return (
    <div className="w-full p-4 flex flex-col gap-3">
      <div className="w-full flex justify-between items-start">
        <div className="w-full flex items-start gap-2">
          <img
            src={productImage}
            alt={productName}
            width={50}
            height={50}
            className="rounded-md object-contain"
          />
          <div className="w-full flex justify-between items-start">
            <h3 className="font-semibold text-sm">{productName}</h3>
            <div className="flex justify-center items-end flex-col gap-2">
              {!isQuestion && (
                <DropdownMenu dir={"rtl"}>
                  <DropdownMenuTrigger>
                    <MoreVertical size={18} className="fill-gray-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="w-full flex justify-between items-center">
                      <Edit />
                      <div>ویرایش نظرات</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full flex text-red-600 justify-between items-center">
                      <Trash2 className="w-4 h-4" />
                      <div>حذف نطرات</div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              {verified && (
                <Badge className="text-green-600 border-green-600 bg-green-200 hover:bg-green-300 ">
                  کامنت قبول شده
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
      {!isQuestion && (
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              className={
                i <= rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      )}
      <p className="text-sm text-muted-foreground">{comment}</p>

      {!isQuestion && (
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{userName}</span>
        </div>
      )}
    </div>
  );
}
