"use client";
import HeaderStore from "@/components/store/component/HeaderStore";
import ShoppingCard from "@/components/store/Shopping/ShoppingCard";

export default function Page() {
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
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/98f5967d3b11b4069c7a89d9608fac880f4a24dc_1690718110.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "گوشی موبایل سامسونگ مدل Galaxy Z Flip5 تک سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    },
    {
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/59d42d66e647de016c7916804a719457fc096d20_1746451526.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      title:
        "بند آی ویش مدل Steel loop-F3 مناسب برای ساعت هوشمند سامسونگ Galaxy Watch Fit 3",
    },
  ];

  return (
    <>
      <div
        className={`w-full min-h-[100vh] flex flex-col  items-center mx-auto shadow-lg`}
        style={{
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className={`w-full `}
        >
          <HeaderStore />
          <div className="w-full md:max-w-6xl mx-auto flex flex-col justify-start  items-end px-3 gap-4">
            <ShoppingCard photo={array} isShow={true} isModal={true} />
          </div>
        </div>
      </div>
    </>
  );
}
