import * as React from "react";

interface ColorCardProps {
  imageUrl: string;
  colorName: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ imageUrl, colorName }) => (
  <div className="self-stretch min-w-60 grow shrink w-[243px] my-auto">
    <img src={imageUrl} alt={colorName} className="aspect-[1.19] object-contain w-full" />
    <div className="mt-[22px] text-center">{colorName}</div>
  </div>
);

export const ColorShopSection = () => {
  const colors = [
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/545a3022b3e0b6acbf6572fafd06cc354edfd344?placeholderIfAbsent=true", name: "SLEEPY BLUE" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f24ecba7d4d87f034149e12ff9d7013e5d02a0e9?placeholderIfAbsent=true", name: "RIPE OLIVE" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e110bff173693db9e346aa81673306abb828a64b?placeholderIfAbsent=true", name: "BLACK" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cef7c915664a0c6a13597ec7ab8c831cd643b726?placeholderIfAbsent=true", name: "SMOKE SLATE" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8df2054405fa12ff03511dbcec55c20cebe2cddc?placeholderIfAbsent=true", name: "CAVERN CLAY" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/79304906558697fb12087cd960c7c8a9c606ad2f?placeholderIfAbsent=true", name: "SAND BANK" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ede664226e66f770fdf123da1726b00554f80497?placeholderIfAbsent=true", name: "NAVAL" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5bd154d270458b02cbdf14d744dc82cf0b20f00?placeholderIfAbsent=true", name: "TOUCH OF SAND" },
  ];

  return (
    <section className="text-center mt-[141px] max-md:mt-10">
      <h2 className="text-black text-[27px] font-normal mb-[84px]">
        SHOP BY COLOR
      </h2>
      <div className="w-full text-xl text-black font-normal">
        <div className="flex w-full items-center gap-[31px] flex-wrap max-md:max-w-full">
          {colors.slice(0, 4).map((color, index) => (
            <ColorCard key={index} imageUrl={color.imageUrl} colorName={color.name} />
          ))}
        </div>
        <div className="flex w-full items-center gap-[31px] flex-wrap mt-[70px] max-md:max-w-full max-md:mt-10">
          {colors.slice(4).map((color, index) => (
            <ColorCard key={index} imageUrl={color.imageUrl} colorName={color.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
