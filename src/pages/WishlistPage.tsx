
import * as React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      size: "M", // Default size
      color: "Black", // Default color
      image: item.image,
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        
        <div className="flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            MY WISHLIST <Heart className="h-6 w-6" />
          </h1>
          
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-xl mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-8">Browse our collections and add items you love</p>
              <Link to="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border border-gray-200">
                  <Link to={`/product/${item.id}`}>
                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-4/5 object-contain" 
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold">{item.name}</h3>
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-rose-500"
                      >
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{item.price}</p>
                      <Button 
                        onClick={() => handleAddToCart(item)} 
                        variant="outline" 
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
