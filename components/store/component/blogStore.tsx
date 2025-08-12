import Link from "next/link";

export default function BlogStore() {
  const array = [1, 2, 3];

  return (
    <div
      dir={"rtl"}
      className="w-full h-1/2 flex justify-between items-start  flex-col gap-6 pt-3 mb-3"
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl">خواندنی هل</h2>
        <Link className="text-Secendery" href={""}>بیشتر</Link>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 justify-between items-center content-start  gap-3">
        {array.map((item) => (
          <div
            key={item}
            className="flex h-[20rem] justify-start gap-2 items-center flex-col border-2 rounded-2xl "
          >
            <img
              className="object-cover rounded-t-2xl"
              src="https://www.digikala.com/mag/wp-content/uploads/2025/04/لوازم-خانگی-1.jpg"
            />
            <h5 className="line-clamp-2 text-sm p-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
