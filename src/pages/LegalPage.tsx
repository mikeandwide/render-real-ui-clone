
import React from 'react';
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/footer/Footer";

const LegalPage = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        <div className="min-h-[60vh] flex flex-col px-[65px] py-[100px] max-md:px-5">
          <h1 className="text-3xl font-bold mb-6">Legal Area</h1>
          <div className="prose max-w-[800px]">
            <p className="mb-6">
              Important legal information about Mike & Wide.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <p className="mb-4">
              By accessing or using our website, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using our services.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="mb-4">
              We offer a 30-day return policy for all unworn and unwashed items with the original tags attached. Please see our Returns page for more detailed information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Warranty Information</h2>
            <p>
              All Mike & Wide products come with a limited warranty against manufacturing defects. This warranty does not cover damage resulting from normal wear and tear, misuse, or improper care.
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

export default LegalPage;
