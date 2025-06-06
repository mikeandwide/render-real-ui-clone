
import * as React from "react";
import { Link } from "react-router-dom";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export const Header = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("INDIA");
  const [open, setOpen] = React.useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

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
      <div className="self-stretch flex gap-6 text-black font-normal whitespace-nowrap my-auto items-center">
        <Link to="/wishlist" className="flex items-center gap-1">
          <Heart className="w-6 h-6" />
          <div className="bg-white">{wishlistItemCount}</div>
        </Link>
        <Link to="/cart" className="flex items-center gap-1">
          <ShoppingCart className="w-6 h-6" />
          <div className="bg-white">{cartItemCount}</div>
        </Link>
      </div>
    </header>
  );
};
