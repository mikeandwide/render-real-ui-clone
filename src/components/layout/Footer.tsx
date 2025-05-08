import * as React from "react";

export const Footer = () => {
  return (
    <footer className="mt-[108px] max-md:mt-10">
      <div className="z-10 flex mt-[-73px] w-full max-w-[1215px] flex-col pb-[47px] max-md:max-w-full">
        <div className="z-10 w-[449px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[43%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-sm text-black font-medium leading-none max-md:mt-10">
                <div>SHIPPING TO</div>
                <div className="mt-5">India</div>
                <div className="mt-[55px] max-md:mr-[7px] max-md:mt-10">
                  FOLLOW US
                </div>
              </div>
            </div>
            <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col text-sm text-black font-medium leading-none max-md:mt-10">
                <div>Info</div>
                <div className="self-stretch mt-[35px]">Follow your order</div>
                <div className="mt-7">Shipping</div>
                <div className="mt-7">Returns</div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 mt-[-167px] w-[346px] max-w-full text-sm text-black font-medium leading-none">
          <div>COMPANY</div>
          <div className="flex w-full gap-[40px_96px] mt-[35px]">
            <div className="w-[116px]">
              <div>History</div>
              <div className="mt-7">World of M& W</div>
              <div className="mt-7">Careers</div>
            </div>
            <div className="w-[134px]">
              <div>Legal Area</div>
              <div className="mt-7">Privacy Policy</div>
              <div className="mt-7">Site map</div>
            </div>
          </div>
        </div>
        <div className="self-center z-10 mt-[-113px] w-[134px] max-w-full text-sm text-black font-medium leading-none">
          <div>Contact Us</div>
          <div className="mt-7">Product Information</div>
        </div>
      </div>
      <div className="w-full max-w-[1285px] mt-[43px] max-md:max-w-full max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f37ae1a08296e524b5a83fb34b2b832aa8f3e179?placeholderIfAbsent=true"
          alt="Footer decoration"
          className="aspect-[1000] object-contain w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7023b2c9a6e1635a201356672af3d8e9c8e09f7?placeholderIfAbsent=true"
          alt="Footer logo"
          className="aspect-[1.96] object-contain w-[92px] mt-[42px] max-md:mt-10"
        />
      </div>
    </footer>
  );
};
