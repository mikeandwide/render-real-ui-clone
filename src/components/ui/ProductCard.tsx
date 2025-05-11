
import * as React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  colors: string[];
  id?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  colors,
  id = 1,
}) => {
  return (
    <Link to={`/product/${id}`} className="block hover:opacity-95 transition-opacity">
      <div className="bg-white self-stretch flex min-w-60 min-h-[555px] flex-col items-stretch w-[287px] my-auto pt-[52px] pb-6 px-7">
        <img
          src={imageUrl}
          alt={title}
          className="aspect-[0.59] object-contain w-[219px] self-center max-w-full"
        />
        <div className="flex w-full flex-col items-stretch mt-8">
          <div className="self-center flex items-center gap-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`rounded bg-[${color}] self-stretch flex w-4 shrink-0 h-2.5 my-auto`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="w-full text-black text-center mt-8">
            <div className="text-[10px] font-bold">{title}</div>
            <div className="text-xs font-medium mt-2">{price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
