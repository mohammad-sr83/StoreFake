import React, { useState } from "react";
import { Star } from "lucide-react";
import { useTheme } from "next-themes";


export default function StarBox() {
  const { resolvedTheme} = useTheme();
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-start items-center flex-col">
      <h2>تعداد استار ها</h2>
      <div className="w-full flex justify-center items-center gap-2">
        {[1, 2, 3, 4, 5].map((item) => {
          const isActive =
            hoverRating !== null ? item <= hoverRating : item <= selectedRating;

          return (
            <Star
              key={item}
              onClick={() => setSelectedRating(item)}
              onMouseEnter={() => setHoverRating(item)}
              onMouseLeave={() => setHoverRating(null)}
              className={`cursor-pointer transition-colors ${
                isActive ? "text-yellow-500" : resolvedTheme=='dark' ?'text-white':"text-black"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
