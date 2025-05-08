import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BlogSection } from "@/components/sections/BlogSection";
import { ColorShopSection } from "@/components/sections/ColorShopSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Index() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/746895eb91c14c2374997680b2e3694d2efb5b13?placeholderIfAbsent=true"
          alt="Featured"
          className="aspect-[1.6] object-contain w-full self-center max-w-[1031px] mt-[43px] max-md:max-w-full max-md:mt-10"
        />
        <HeroSection />
        <div className="flex w-full flex-col items-stretch mt-[324px] px-[62px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <ProductGrid />
          <BlogSection />
          <ColorShopSection />
        </div>
        <div className="w-full mt-[84px] px-[65px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <NewsletterSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
