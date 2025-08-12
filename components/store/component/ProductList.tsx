
import Link from "next/link";
import CardShop from "../Card/CardShopp";

export default function ProductList() {
  const array = [
    {id:1,photo:'https://dkstatics-public.digikala.com/digikala-products/ce5c8e2cd6f2330f7c2c5da6d36ef86903f0836b_1739709093.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'},
    {id:2,photo:'https://dkstatics-public.digikala.com/digikala-products/96004dc7ae87d9d51608a67e3a8f2b5e40b24f96_1741550429.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'},
    {id:3,photo:'https://dkstatics-public.digikala.com/digikala-products/c2f09960ac13daf55ae8289f56600b1202c8da60_1681126500.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'},
    {id:4,photo:'https://dkstatics-public.digikala.com/digikala-products/9a7a182e6348b7cf3c8fa6742a3ca034a74e61ec_1744097432.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'},
    {id:5,photo:'https://dkstatics-public.digikala.com/digikala-products/0841b7c452265f0387180fee49dc673aa96e9668_1739799627.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'},
    {id:6,photo:'https://dkstatics-public.digikala.com/digikala-products/68e3a61d248fa58fb2db837a08d3d3408af9f826_1735833078.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'}
  ];
  
  return (
    <div
      dir={"rtl"}
      className="w-full h-1/2 flex justify-between items-center flex-col gap-3 pt-3 mb-3 border-2 rounded-2xl"
    >
      <h2 className="text-xl">لیست محصولات</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-center items-center md:gap-y-12 md:p-3">
        {array.map((item, index) => (
          <Link className="flex justify-center items-center p-2" key={index} href={`store/${item.id}`}>
          <CardShop  photo={item.photo} />
          </Link>
        ))}
      </div>
    </div>
  );
}
