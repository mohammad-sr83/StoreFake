import { SwiperComponentButton } from "@/components/swiper/SwiperComonent";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import DialogStoryMode from "./DialogStoryMode";

export const ArrayData = [
  {
    id: 1,
    title: "محصولات باورنکردنی",
    video:
      "https://ia803407.us.archive.org/0/items/big-bunny-sample-video/SampleVideo.ia.mp4",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d97548c41375495635cf7567f6a8ca6ed14698ca_1758365977.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 2,
    title: "محصولات جدید بهداشتی",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 3,
    title: "افر های جذاب",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/9d65ac2d7796ec034e46c338363f50f827e51931_1756746755.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 4,
    title: "سیاست های فروش",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 5,
    title: "تماس های نیاز",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 6,
    title: "محصولات باورنکردنی",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d97548c41375495635cf7567f6a8ca6ed14698ca_1758365977.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 7,
    title: "محصولات جدید بهداشتی",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/6341a84c67529d6c445d76b9fb72817124b501b3_1758465552.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 8,
    title: "افر های جذاب",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/9d65ac2d7796ec034e46c338363f50f827e51931_1756746755.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 9,
    title: "سیاست های فروش",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 10,
    title: "تماس های نیاز",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 11,
    title: "محصولات باورنکردنی",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d97548c41375495635cf7567f6a8ca6ed14698ca_1758365977.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 12,
    title: "محصولات جدید بهداشتی",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/6341a84c67529d6c445d76b9fb72817124b501b3_1758465552.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 13,
    title: "افر های جذاب",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/9d65ac2d7796ec034e46c338363f50f827e51931_1756746755.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 14,
    title: "سیاست های فروش",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
  {
    id: 15,
    title: "تماس های نیاز",
    image:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c114c367303d3adbdb863a55b2617cf0d44e5d_1758571607.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
  },
];

export default function StoryMode() {
  const [open, setOpen] = useState(false);
  const [invalidId, setInvalidId] = useState(1);

  return (
    <div className="w-full py-3">
      <SwiperComponentButton
        breakpoints={{
          320: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 7,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 12,
            spaceBetween: 16,
          },
        }}
      >
        {ArrayData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer"
            onClick={() => (setInvalidId(item.id), setOpen(true))}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "5rem",
            }}
          >
            <div className="p-[0.1rem] rounded-full border-2 border-red-500">
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h5 className="text-xs sm:text-sm text-center">{item.title}</h5>
          </SwiperSlide>
        ))}
      </SwiperComponentButton>
      <DialogStoryMode open={open} setOpen={setOpen} initialId={invalidId} />
    </div>
  );
}
