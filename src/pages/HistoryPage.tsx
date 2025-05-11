
import React from 'react';
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/footer/Footer";

const HistoryPage = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="min-h-[60vh] flex flex-col px-[65px] py-[100px] max-md:px-5">
          <h1 className="text-3xl font-bold mb-6">Our History</h1>
          <div className="prose max-w-[800px]">
            <p className="mb-6">
              Learn about the history of Mike & Wide and our journey.
            </p>
            <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
            <p className="mb-6">
              Founded in 1985, Mike & Wide began as a small tailor shop in downtown Milan. Our founders, Michael Williams and William Wideworth, shared a passion for quality craftsmanship and innovative design.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Growth and Expansion</h2>
            <p className="mb-6">
              Throughout the 1990s, Mike & Wide expanded across Europe, opening flagship stores in Paris, London, and Berlin. Our commitment to excellence and attention to detail quickly gained recognition in the fashion industry.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Mike & Wide Today</h2>
            <p>
              Today, Mike & Wide is a global brand with stores in over 40 countries. We continue to honor our heritage while embracing innovation, creating timeless pieces that stand at the intersection of tradition and modernity.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-[65px] max-md:px-5">
        <Footer />
      </div>
    </div>
  );
};

export default HistoryPage;
