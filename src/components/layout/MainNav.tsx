import * as React from "react";

export const MainNav = () => {
  return (
    <nav className="bg-white flex items-center gap-[40px_100px] text-[23px] text-[rgba(25,25,25,1)] font-normal justify-center flex-wrap mt-10 px-3 py-4 border-[rgba(0,0,0,0.2)] border-t border-b max-md:max-w-full">
      <a href="#" className="bg-blend-normal self-stretch my-auto">
        SHIRT
      </a>
      <a href="#" className="bg-blend-normal self-stretch my-auto">
        TROUSER
      </a>
      <a href="#" className="bg-blend-normal self-stretch my-auto">
        BLAZER
      </a>
      <a href="#" className="bg-blend-normal self-stretch my-auto">
        BOW/TIE
      </a>
      <a href="#" className="bg-blend-normal self-stretch my-auto">
        ACCESSORIES
      </a>
    </nav>
  );
};
