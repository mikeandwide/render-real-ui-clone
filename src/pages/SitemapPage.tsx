
import React from 'react';
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/footer/Footer";

const SitemapPage = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-[65px] py-[100px] max-md:px-5">
          <h1 className="text-3xl font-bold mb-6">Site Map</h1>
          <p className="text-lg text-center max-w-[600px] mb-10">
            A complete overview of all pages on the Mike & Wide website.
          </p>
          <div className="grid grid-cols-3 gap-10 max-w-[900px] max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Products</h2>
              <ul className="flex flex-col gap-2">
                <li><a href="/shirts" className="hover:underline">Shirts</a></li>
                <li><a href="/trousers" className="hover:underline">Trousers</a></li>
                <li><a href="/blazers" className="hover:underline">Blazers</a></li>
                <li><a href="/ties" className="hover:underline">Ties</a></li>
                <li><a href="/accessories" className="hover:underline">Accessories</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Info</h2>
              <ul className="flex flex-col gap-2">
                <li><a href="/order-tracking" className="hover:underline">Order Tracking</a></li>
                <li><a href="/shipping" className="hover:underline">Shipping</a></li>
                <li><a href="/returns" className="hover:underline">Returns</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="/product-info" className="hover:underline">Product Information</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Company</h2>
              <ul className="flex flex-col gap-2">
                <li><a href="/history" className="hover:underline">History</a></li>
                <li><a href="/world" className="hover:underline">World of M& W</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
                <li><a href="/legal" className="hover:underline">Legal Area</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[65px] max-md:px-5">
        <Footer />
      </div>
    </div>
  );
};

export default SitemapPage;
