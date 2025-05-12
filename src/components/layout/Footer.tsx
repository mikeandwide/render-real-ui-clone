
import * as React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="mt-[108px] px-5 pb-10 max-md:mt-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Newsletter Signup Section */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">JOIN #MIKEANDWIDE</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Sign up and be the first to know about new arrivals, exclusive
                promotions and the latest news from the World of Mike & Wide.
                Plus, enjoy 10% off your next order.
              </p>
            </div>
            
            <div className="md:p-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="flex">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your mail id"
                    className="flex-1 px-4 py-2 border border-black focus:outline-none"
                  />
                  <button className="bg-black text-white px-4 py-2 flex items-center justify-center">
                    <svg
                      width="24" 
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className={`grid ${isMobile ? "grid-cols-2 gap-y-8" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-8 lg:gap-4`}>
          {/* SHIPPING TO Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">SHIPPING TO</h3>
            <p className="text-black text-sm mb-8">India</p>
            <h3 className="text-black text-sm font-medium mb-4">FOLLOW US</h3>
          </div>

          {/* Info Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">INFO</h3>
            <Link to="/order-tracking" className="text-black text-sm mb-4">Follow your order</Link>
            <Link to="/shipping" className="text-black text-sm mb-4">Shipping</Link>
            <Link to="/returns" className="text-black text-sm mb-4">Returns</Link>
          </div>

          {/* COMPANY Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">COMPANY</h3>
            <Link to="/history" className="text-black text-sm mb-4">History</Link>
            <Link to="/world" className="text-black text-sm mb-4">World of M& W</Link>
            <Link to="/careers" className="text-black text-sm mb-4">Careers</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <Link to="/contact" className="text-black text-sm mb-4">Contact Us</Link>
            <Link to="/product-info" className="text-black text-sm mb-4">Product Information</Link>
            <Link to="/legal" className="text-black text-sm mb-4">Legal Area</Link>
            <Link to="/privacy" className="text-black text-sm mb-4">Privacy Policy</Link>
            <Link to="/sitemap" className="text-black text-sm mb-4">Site map</Link>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex justify-start">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7023b2c9a6e1635a201356672af3d8e9c8e09f7?placeholderIfAbsent=true"
              alt="Footer logo"
              className="h-10 object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
