
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";

export default function AccessoriesPage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-8">ACCESSORIES COLLECTION</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="bg-[#f8f8f8] w-full aspect-square mb-4 flex items-center justify-center">
                  <img 
                    src={`https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true`}
                    alt={`Accessory ${item}`}
                    className="h-3/5 object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-center">LEATHER WATCH</h3>
                <p className="text-sm mt-2">$ 89</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
