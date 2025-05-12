
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { ProductCardSimple } from "@/components/ui/ProductCardSimple";

export default function AccessoriesPage() {
  const products = [
    {
      id: 31,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    },
    {
      id: 32,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    },
    {
      id: 33,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    },
    {
      id: 34,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    },
    {
      id: 35,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    },
    {
      id: 36,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
      title: "LEATHER WATCH",
      price: "$ 89"
    }
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-8">ACCESSORIES COLLECTION</h1>
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
