import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeftIcon,
  ChevronDown,
  Heart,
  LogOutIcon,
  MapPin,
  MessageCircle,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          flex justify-center items-center 
          rounded-md p-2
          transition-colors
          border-none
          data-[state=open]:bg-gray-200
        "
      >
        <User size={20} className="cursor-pointer" />
        <ChevronDown size={10} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="p-0">
        <DropdownMenuLabel className="h-[3rem] flex justify-end items-center rounded-none">
          <Link
            className="w-full flex justify-center items-center gap-1"
            href={`/profile`}
          >
            <ArrowLeftIcon size={15} />
            <span> Mohammad Soleimanpour</span>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="rounded-none">
          <Link
            className="w-full flex justify-end items-center gap-1 p-1"
            href={`/profile/orders`}
          >
            <span>سفارش ها</span>
            <ShoppingBag size={15} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="rounded-none">
          <Link
            className="w-full flex justify-end items-center gap-1 p-1"
            href={`/profile/addresses`}
          >
            <span>آدرس ها</span>
            <MapPin size={15} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="rounded-none">
          <Link
            className="w-full flex justify-end items-center gap-1 p-1"
            href={`/profile/lists`}
          >
            <span>لیست مورد علاقه</span>
            <Heart size={15} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="rounded-none">
          <Link
            className="w-full flex justify-end items-center gap-1 p-1"
            href={`/profile/comments`}
          >
            <span>نظرات</span>
            <MessageCircle size={15} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
