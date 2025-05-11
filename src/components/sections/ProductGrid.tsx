
import * as React from "react";
import { ProductCard } from "../ui/ProductCard";

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 56",
      colors: ["rgba(25,25,25,1)", "rgba(116,58,45,1)", "rgba(103,104,109,1)"],
    },
    {
      id: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 56",
      colors: ["rgba(25,25,25,1)", "rgba(116,58,45,1)", "rgba(103,104,109,1)"],
    },
    {
      id: 3,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 56",
      colors: ["rgba(25,25,25,1)", "rgba(116,58,45,1)", "rgba(103,104,109,1)"],
    },
    {
      id: 4,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 56",
      colors: ["rgba(25,25,25,1)", "rgba(116,58,45,1)", "rgba(103,104,109,1)"],
    },
  ];

  return (
    <section className="bg-[rgba(242,242,242,1)] self-center flex items-center gap-2.5 flex-wrap max-md:max-w-full">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};
