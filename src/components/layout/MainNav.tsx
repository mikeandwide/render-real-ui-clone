
import * as React from "react";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="bg-white flex items-center gap-[40px_100px] text-[23px] text-[rgba(25,25,25,1)] font-normal justify-center flex-wrap mt-10 px-3 py-4 border-[rgba(0,0,0,0.2)] border-t border-b max-md:max-w-full">
      <Link to="/shirts" className="bg-blend-normal self-stretch my-auto">
        SHIRT
      </Link>
      <Link to="/trousers" className="bg-blend-normal self-stretch my-auto">
        TROUSER
      </Link>
      <Link to="/blazers" className="bg-blend-normal self-stretch my-auto">
        BLAZER
      </Link>
      <Link to="/ties" className="bg-blend-normal self-stretch my-auto">
        BOW/TIE
      </Link>
      <Link to="/accessories" className="bg-blend-normal self-stretch my-auto">
        ACCESSORIES
      </Link>
    </nav>
  );
};
