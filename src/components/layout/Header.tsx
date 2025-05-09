
import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="self-center flex w-full max-w-[980px] items-center gap-5 text-lg tracking-[2px] flex-wrap justify-between max-md:max-w-full">
      <div className="bg-white self-stretch my-auto">
        <div className="bg-blend-normal text-[rgba(19,20,21,1)] font-normal">
          SHIPPING TO
        </div>
        <div className="bg-blend-normal text-black font-medium underline mt-1">
          INDIA
        </div>
      </div>
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89b26dcba7f8324dde1cc1c7def1bf2c37a9dc80?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[4.52] object-contain w-[385px] self-stretch"
        />
      </Link>
      <Link to="/cart" className="self-stretch flex gap-6 text-black font-normal whitespace-nowrap my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6ec2746a664b90045a8cb8268d05267b9526f23?placeholderIfAbsent=true"
          alt="Cart"
          className="aspect-[1] object-contain w-6 shrink-0"
        />
        <div className="bg-white gap-1">0</div>
      </Link>
    </header>
  );
};
