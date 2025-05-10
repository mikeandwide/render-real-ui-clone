
import * as React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="flex w-full max-w-[1151px] flex-col md:flex-row gap-5 justify-between ml-3 mt-[218px] max-md:max-w-full max-md:mt-10">
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
          <div className="flex w-full mt-1 max-md:max-w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail id"
              className="flex-grow text-sm text-black font-light leading-none w-[442px] px-4 py-4 h-[59px] border-black border-t border-b border-l max-md:max-w-full"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center h-[59px] w-[59px] border border-black bg-white"
              aria-label="Submit"
            >
              <ArrowRight size={24} className="text-black" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-stretch">
        <img
          src="public/lovable-uploads/10fa74a9-3898-41cf-9c42-9154ec883429.png"
          alt="Newsletter decoration"
          className="aspect-[1.5] object-contain w-fit z-10 mr-[-145px] grow shrink-0 basis-0 mt-[99px] max-md:mt-10"
        />
        <div className="bg-[rgba(18,20,21,1)] flex w-[242px] shrink-0 h-[319px]" />
      </div>
    </section>
  );
};
