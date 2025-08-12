import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";
import StarBox from "./StarBox";

export default function Questions() {
  const [date, setdate] = useState<{ isShow: boolean; id: number } | undefined>(
    undefined
  );
  const comment = [
    {
      id: 1,
      title: "تست 2",
      name: "علی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
      star: 3,
      children: [
        {
          id: 1.2,
          title: "تست 42",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 3,
        },
        {
          id: 1.3,
          title: "تست32",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 3,
        },
        {
          id: 1.4,
          title: "تست 3422",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 4,
        },
      ],
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
      children: [
        {
          id: 4.2,
          title: "تست 42",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 3,
        },
        {
          id: 4.3,
          title: "تست32",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 3,
        },
        {
          id: 4.4,
          title: "تست 3422",
          name: "علی",
          desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از",
          star: 4,
        },
      ],
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
            <div className="w-full flex justify-end items-center mt-4">
              {date === undefined && (
                <span
                  className="cursor-pointer"
                  onClick={() => setdate({ isShow: true, id: item.id })}
                >
                  پاسخ
                </span>
              )}

              {date?.isShow && item.id == date.id && (
                <>
                  <Label>{"پاسخ خود را وارد کنید "}</Label>
                  <Textarea rows={3} />
                  <div className="flex justify-center items-center flex-col gap-2 p-2">
                    <Button variant="ghost" onClick={() => setdate(undefined)}>
                      بستن
                    </Button>
                    <Button variant="ghost" onClick={() => setdate(undefined)}>
                     ثبت
                    </Button>
                  </div>
                </>
              )}
            </div>
            {item.children && (
              <>
                {item.children.map((item) => (
                  <div
                    key={item.id}
                    className="w-full p-10 border-2 rounded-2xl"
                  >
                    <div className="w-full flex justify-start items-center">
                      <Star
                        className={`${item.star >= 1 && "text-yellow-400"}`}
                      />
                      <Star
                        className={`${item.star >= 2 && "text-yellow-400"}`}
                      />
                      <Star
                        className={`${item.star >= 3 && "text-yellow-400"}`}
                      />
                      <Star
                        className={`${item.star >= 4 && "text-yellow-400"}`}
                      />
                      <Star
                        className={`${item.star >= 5 && "text-yellow-400"}`}
                      />
                    </div>
                    <div className="w-full flex justify-start items-center">
                      {item.name}
                    </div>
                    <div className="w-full flex justify-start items-center text-justify">
                      {item.desc}
                    </div>
                    <div className="w-full flex justify-end items-center mt-4">
                      {date === undefined && (
                        <span
                          className="cursor-pointer"
                          onClick={() => setdate({ isShow: true, id: item.id })}
                        >
                          جواب
                        </span>
                      )}

                      {date?.isShow && item.id == date.id && (
                        <>
                          <Label>{"پاسخ خود را وارد کنید "}</Label>
                          <Textarea rows={3} />
                          <div className="flex justify-center items-center flex-col gap-2 p-2">
                            <Button
                              variant="ghost"
                              onClick={() => setdate(undefined)}
                            >
                              بستن
                            </Button>
                            <Button
                              variant="ghost"
                              onClick={() => setdate(undefined)}
                            >
                              ثبت
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-start flex-col gap-3 mt-6">
        <h3>سوال</h3>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-full">
            <Label>{"دیدگاه خود را وارد کنید"}</Label>
            <Textarea />
          </span>
          <StarBox />
        </div>
        <Label>{"دیدگاه خود را وارد کنید"}</Label>
        <Textarea rows={4} />
        <Button variant="ghost">ثبت</Button>
      </div>
    </>
  );
}
