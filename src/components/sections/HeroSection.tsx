
import * as React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="flex flex-col relative min-h-[604px] w-[1435px] max-w-full items-center mt-[75px] pt-[473px] pb-6 px-20 max-md:mr-0.5 max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa63ca1c46874227d4d1c00ae598bc4892ac3050?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[757px] max-w-full flex-col items-stretch ml-[65px]">
        <h1 className="text-white text-[32px] font-bold tracking-[4px] max-md:max-w-full">
          BLEND OF ITALIAN & MODERN ROCOCO
        </h1>
        <Link to="/blazers" className="self-center">
          <button className="bg-white w-[141px] max-w-full gap-2.5 text-sm text-black font-medium tracking-[1px] mt-[19px] px-3 py-4">
            SEE MORE
          </button>
        </Link>
      </div>
    </section>
  );
};
