
import * as React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardSimpleProps {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
}

export const ProductCardSimple: React.FC<ProductCardSimpleProps> = ({
  id,
  imageUrl,
  title,
  price,
}) => {
  const { addToWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail page
    e.stopPropagation(); // Stop event propagation
    
    const item = {
      id,
      name: title,
      price,
      image: imageUrl,
    };
    
    addToWishlist(item);
    
    toast({
      title: isInWishlist(id) ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist(id)
        ? `${title} has been removed from your wishlist.`
        : `${title} has been added to your wishlist.`,
    });
  };

  const isWishlisted = isInWishlist(id);

  return (
    <div className="relative">
      <Link to={`/product/${id}`} className="flex flex-col items-center hover:opacity-90 transition-opacity">
        <div className="bg-[#f8f8f8] w-full aspect-[0.8] mb-4 flex items-center justify-center">
          <img 
            src={imageUrl}
            alt={title}
            className="h-4/5 object-contain"
          />
        </div>
        <h3 className="text-sm font-bold text-center">{title}</h3>
        <p className="text-sm mt-2">{price}</p>
      </Link>
      <button
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm"
        onClick={handleWishlistClick}
      >
        <Heart
          className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-gray-500'}`}
        />
      </button>
    </div>
  );
};
