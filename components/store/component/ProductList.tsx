
import Link from "next/link";
import CardShop from "../Card/CardShopp";

export default function ProductList() {
  const array = [
    {
      price: 12000,
      id: 1,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 2,
      title: "ایرپاد",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 3,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 4,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 5,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 6,
      title: "موبایل آیفون",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277566.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 7,
      title: "ایرپاد",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 8,
      title: "ipad مدل 2002",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c778d225cd3106563489a8f740a7e7dab2930520_1735192964.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      id: 9,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      discount: 25,
      id: 10,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
     {
      price: 12000,
      id: 9,
      title: "بند ساعت",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/4b3d5c78395abeae12d2218598965b65d26cd1e4_1738657233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      price: 12000,
      discount: 25,
      id: 10,
      title: "کاور ipad",
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/830337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  return (
    <div
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <h2 className="text-xl">لیست محصئلان</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 justify-center items-center md:p-2">
        {array.map((item, index) => (
          <Link
            className="flex items-center"
            key={index}
            href={`store/${item.id}`}
          >
            <CardShop Item={item as any} borderFull={true} />
          </Link>
        ))}
      </div>
    </div>
  );
}
