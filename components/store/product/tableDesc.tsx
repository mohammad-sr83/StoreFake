import React from "react";

export default function TableDesc() {
  return (
    <table className="w-full text-center flex justify-center items-center ">
      <tbody>
        <tr>
          <td className="text-left font-medium p-2 w-1/3">مدل</td>
          <td className="text-right p-2">csdc</td>
        </tr>
        <tr>
          <td className="text-left font-medium p-2">ISBN:</td>
          <td className="text-right p-2">csda</td>
        </tr>
        <tr>
          <td className="text-left font-medium p-2">قیمت:</td>
          <td className="text-right p-2">sacsscs</td>
        </tr>
        <tr>
          <td className="text-left font-medium p-2 ">ناشر کتاب:</td>
          <td className="text-right p-2">
            13153131
            {/* <ShowDate date={data?.publishDate} /> */}
          </td>
        </tr>
        <tr>
          <td className="text-left font-medium p-2">توضیحات:</td>
          <td className="text-right p-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          </td>
        </tr>
      </tbody>
    </table>
  );
}
