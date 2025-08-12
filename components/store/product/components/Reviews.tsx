import React from "react";
import { Star } from "lucide-react";
import StarBox from "./StarBox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Reviews() {
  const comment = [
    {
      id: 1,
      title: "تست 2",
      name: "علی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
      star: 3,
    },
    {
      id: 2,
      title: "تست 42",
      name: "علی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
      star: 3,
    },
    {
      id: 3,
      title: "تست32",
      name: "علی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
      star: 3,
    },
    {
      id: 4,
      title: "تست 3422",
      name: "علی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
      star: 4,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4">
        {comment.map((item) => (
          <div
            key={item.id}
            className="w-full h-full border-b-2 flex justify-between items-center flex-col gap-3 p-3"
          >
            <div className="w-full flex justify-start items-center">
              <Star className={`${item.star >= 1 && "text-yellow-400"}`} />
              <Star className={`${item.star >= 2 && "text-yellow-400"}`} />
              <Star className={`${item.star >= 3 && "text-yellow-400"}`} />
              <Star className={`${item.star >= 4 && "text-yellow-400"}`} />
              <Star className={`${item.star >= 5 && "text-yellow-400"}`} />
            </div>
            <div className="w-full flex justify-start items-center">
              {item.name}
            </div>
            <div className="w-full flex justify-start items-center text-justify">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-start flex-col gap-3 mt-6">
        <h3>کامنت ها</h3>
        <div className="w-full flex justify-start items-center gap-3">
          <div className="w-full">
            <Label>{"نام خود را وارد کنید"}</Label>
            <Textarea />
          </div>
          <StarBox />
        </div>
        <div className="w-full">
          <Label>{"دیدگاه خود را وارد کنید"}</Label>
          <Textarea rows={4} />
        </div>
        <Button variant="ghost">ثبت</Button>
      </div>
    </>
  );
}
