
import * as React from "react";
import { Link } from "react-router-dom";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("INDIA");
  const [open, setOpen] = React.useState(false);

  const countries = [
    "INDIA", "USA", "UK", "CANADA", 
    "AUSTRALIA", "FRANCE", "GERMANY", "JAPAN",
    "CHINA", "BRAZIL", "ITALY", "SPAIN"
  ];

  return (
    <header className="self-center flex w-full max-w-[980px] items-center gap-5 text-lg tracking-[2px] flex-wrap justify-between max-md:max-w-full">
      <div className="bg-white self-stretch my-auto">
        <div className="bg-blend-normal text-[rgba(19,20,21,1)] font-normal">
          SHIPPING TO
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="flex items-center gap-1 bg-blend-normal text-black font-medium underline mt-1 cursor-pointer">
            {selectedCountry} <ChevronDown className="h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0">
            <div className="max-h-60 overflow-auto py-1">
              {countries.map((country) => (
                <button 
                  key={country}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedCountry === country ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    console.log(`Selected country: ${country}`);
                    setSelectedCountry(country);
                    setOpen(false);
                  }}
                >
                  {country}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
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
