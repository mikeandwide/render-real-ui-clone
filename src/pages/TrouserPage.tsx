
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { ProductCardSimple } from "@/components/ui/ProductCardSimple";

export default function TrouserPage() {
  const products = [
    {
      id: 11,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    },
    {
      id: 12,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    },
    {
      id: 13,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    },
    {
      id: 14,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    },
    {
      id: 15,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    },
    {
      id: 16,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      title: "ITALIAN WOOL TROUSER",
      price: "$ 65"
    }
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-8">TROUSER COLLECTION</h1>
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
