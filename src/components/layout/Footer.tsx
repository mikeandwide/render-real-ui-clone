
import * as React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="mt-[108px] px-5 pb-10 max-md:mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* SHIPPING TO Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">SHIPPING TO</h3>
            <p className="text-black text-sm">India</p>
            <h3 className="text-black text-sm font-medium mt-10 mb-4">FOLLOW US</h3>
          </div>

          {/* Info Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">INFO</h3>
            <Link to="/" className="text-black text-sm mb-4">Follow your order</Link>
            <Link to="/" className="text-black text-sm mb-4">Shipping</Link>
            <Link to="/" className="text-black text-sm mb-4">Returns</Link>
          </div>

          {/* COMPANY Column */}
          <div className="flex flex-col">
            <h3 className="text-black text-sm font-medium mb-4">COMPANY</h3>
            <Link to="/" className="text-black text-sm mb-4">History</Link>
            <Link to="/" className="text-black text-sm mb-4">World of M& W</Link>
            <Link to="/" className="text-black text-sm mb-4">Careers</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <Link to="/" className="text-black text-sm font-medium mb-4">Contact Us</Link>
            <Link to="/" className="text-black text-sm mb-4">Product Information</Link>
            <Link to="/" className="text-black text-sm mb-4">Legal Area</Link>
            <Link to="/" className="text-black text-sm mb-4">Privacy Policy</Link>
            <Link to="/" className="text-black text-sm mb-4">Site map</Link>
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
