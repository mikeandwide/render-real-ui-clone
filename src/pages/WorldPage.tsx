
import React from 'react';
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/footer/Footer";

const WorldPage = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-[65px] py-[100px] max-md:px-5">
          <h1 className="text-3xl font-bold mb-6">World of M& W</h1>
          <p className="text-lg text-center max-w-[600px]">
            Discover the unique world of Mike & Wide and what makes our brand special.
          </p>
        </div>
      </div>
      <div className="w-full px-[65px] max-md:px-5">
        <Footer />
      </div>
    </div>
  );
};

export default WorldPage;
