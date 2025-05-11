
import * as React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

export default function ShirtPage() {
  const products = [
    {
      id: 5,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    },
    {
      id: 6,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    },
    {
      id: 7,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    },
    {
      id: 8,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    },
    {
      id: 9,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    },
    {
      id: 10,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      title: "COTTON CASUAL SHIRT",
      price: "$ 49"
    }
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-8">SHIRTS COLLECTION</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="flex flex-col items-center hover:opacity-90 transition-opacity">
                <div className="bg-[#f8f8f8] w-full aspect-[0.8] mb-4 flex items-center justify-center">
                  <img 
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-4/5 object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-center">{product.title}</h3>
                <p className="text-sm mt-2">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
