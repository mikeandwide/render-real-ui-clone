import * as React from "react";

export const BlogSection = () => {
  return (
    <section className="mt-[303px] max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8210d7203443bb7acb7e27dceaf89f25750a6aef?placeholderIfAbsent=true"
        alt="Blog header"
        className="aspect-[1.99] object-contain w-full max-md:max-w-full max-md:mr-0.5"
      />
      <h2 className="text-black text-xs font-bold tracking-[2px] mt-7">
        THE BLOG
      </h2>
      <div className="flex items-stretch gap-5 flex-wrap justify-between mt-[37px] max-md:max-w-full">
        <div className="flex flex-col items-stretch font-normal">
          <h3 className="text-black text-[28px]">
            A Brief History of Mike&Wide
            <br />
            and how it all started.
          </h3>
          <div className="flex items-center gap-0.5 text-base text-[rgba(25,25,25,1)] mt-3">
            <span className="bg-blend-normal self-stretch my-auto">
              Read more
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e50973d30a35cd3ce3d61c86d93c602d9d8a30?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="text-black">
          <div className="text-[13px] tracking-[2.67px] ml-3 max-md:ml-2.5">
            <span className="font-normal">Words by</span>{" "}
            <span className="font-bold">H.KUMAR</span>
          </div>
          <div className="text-lg font-normal mt-4">Himanshu Kumar</div>
        </div>
      </div>
    </section>
  );
};
