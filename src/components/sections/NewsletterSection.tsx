
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="flex w-full max-w-[1151px] items-stretch gap-5 flex-wrap justify-between ml-3 mt-[218px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <h2 className="text-black text-2xl font-semibold">
          JOIN #MIKEANDWIDE
        </h2>
        <p className="text-black text-sm font-semibold leading-[19px] mr-[39px] mt-[30px] max-md:max-w-full max-md:mr-2.5">
          Sign up and be the first to know about new arrivals, exclusive
          promotions and the lates news from the World of Mike & Wide.
          Plus, enjoy 10% off your next order.
        </p>
        <form onSubmit={handleSubmit} className="w-full mt-[70px] max-md:max-w-full max-md:mt-10">
          <label className="text-black text-sm font-medium leading-none max-md:max-w-full">
            Email Address
          </label>
          <div className="flex w-full items-stretch mt-1 max-md:max-w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail id"
              className="flex-grow text-sm text-black font-light leading-none w-[442px] px-2.5 py-5 border-black border-t border-b border-l max-md:max-w-full"
              required
            />
            <button
              type="submit"
              className="border border-black flex items-center justify-center h-[59px] w-[59px]" 
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e50973d30a35cd3ce3d61c86d93c602d9d8a30?placeholderIfAbsent=true"
                alt="Submit"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-stretch">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b60c7b58550f090e3a181e44b04f0ca432921d0?placeholderIfAbsent=true"
          alt="Newsletter decoration"
          className="aspect-[1.5] object-contain w-fit z-10 mr-[-145px] grow shrink-0 basis-0 mt-[99px] max-md:mt-10"
        />
        <div className="bg-[rgba(18,20,21,1)] flex w-[242px] shrink-0 h-[319px]" />
      </div>
    </section>
  );
};
