"use client";

import AddressComponent from "@/components/store/shipping/address/addressComponent";
import CardShipping from "@/components/store/shipping/cardShipping";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";


export default function page() {
  const router = useRouter();

  return (
    <div className="w-full md:max-w-7xl mx-auto py-4 flex flex-col gap-3">
      <div
        className="w-full h-[3.5rem] flex justify-center items-center border rounded-lg"
      >
        <div
          className={`w-full mx-auto flex justify-start py-3 px-3 items-center 2xl:px-0`}
        >
          <div className="w-1/2 flex justify-start items-center gap-2">
            <ArrowLeft
              className={`cursor-pointer`}
              onClick={() => router.back()}
            />
            <span>آدرس و زمان ارسال</span>
          </div>
          <span className="size-12">Logo</span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-3">
        <CardShipping />
        <div className="w-full flex justify-start items-center flex-col gap-3">
          <AddressComponent />
          <div className="w-full border rounded-lg h-full"> </div>
        </div>
      </div>
    </div>
  );
}
