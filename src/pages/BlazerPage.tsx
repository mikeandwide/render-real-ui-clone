
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { ProductCardSimple } from "@/components/ui/ProductCardSimple";

export default function BlazerPage() {
  const products = [
    {
      id: 17,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    },
    {
      id: 18,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    },
    {
      id: 19,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    },
    {
      id: 20,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    },
    {
      id: 21,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    },
    {
      id: 22,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true",
      title: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: "$ 129"
    }
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-8">BLAZER COLLECTION</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
            {products.map((product) => (
              <ProductCardSimple
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
