
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);
  const isMobile = useIsMobile();

  // Mock product data
  const product = {
    id,
    name: "REGULAR - FIT SHIRT IN CHAMBRAY LINEN",
    price: "$ 56",
    description: "A key element of a MIKE & WIDE ensemble, this slim-fit shirt is expertly tailored for a clean silhouette. Made from premium chambray linen providing a soft feel with natural drape. Features a classic point collar with structured interlining.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#191919", "#743a2d", "#67686d"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true"
    ],
    sku: "3W42X-4",
    materialInfo: "100% LINEN",
    careInstructions: [
      "MACHINE WASH COMFORTABLE",
      "WASH USING SHORT SPIN CYCLE",
      "DO NOT IRON ON PRINT",
      "WASH SEPARATELY",
      "AIR DRY ONLY"
    ]
  };

  // Set default selected color
  React.useEffect(() => {
    if (product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0]);
    }
  }, [product.colors, selectedColor]);

  const handleAddToCart = () => {
    // Get color name based on hex code
    const colorNames: { [key: string]: string } = {
      "#191919": "Black",
      "#743a2d": "Brown",
      "#67686d": "Gray",
    };
    
    const colorName = colorNames[selectedColor] || "Default";
    
    // Add item to cart
    addToCart({
      id: product.id || "1",
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      color: colorName,
      image: product.images[0]
    });
    
    // Show success toast
    toast({
      title: "Added to cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    const item = {
      id: Number(product.id) || 1,
      name: product.name,
      price: product.price,
      image: product.images[0]
    };
    
    addToWishlist(item);
    
    toast({
      title: isInWishlist(Number(product.id) || 1) ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist(Number(product.id) || 1)
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };
  
  // Check if product is in wishlist
  const isWishlisted = isInWishlist(Number(product.id) || 1);

  // Related products (recommendations)
  const recommendations = [
    {
      id: 101,
      name: "CLASSIC PURE LINEN DRESS SHIRT",
      price: "$ 56",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
    },
    {
      id: 102,
      name: "SILK BOW TIE IN BLACK",
      price: "$ 35",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/075b8e8220a4f173d542b9f63784b0614b809a14?placeholderIfAbsent=true",
    },
    {
      id: 103,
      name: "PREMIUM COTTON DRESS SHIRT",
      price: "$ 49",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
    },
    {
      id: 104,
      name: "LINEN BLEND CASUAL SHIRT",
      price: "$ 52",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        
        {/* Product Detail Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-8">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Left Side - Images */}
            <div className="w-full md:w-1/2">
              {/* Main Product Image */}
              <div className="bg-[#f9f9f9] aspect-square w-full mb-4 flex items-center justify-center">
                <img 
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="h-5/6 object-contain"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`min-w-[70px] h-[70px] bg-[#f9f9f9] flex items-center justify-center cursor-pointer ${
                      activeImage === index ? 'border-2 border-black' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-4/5 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Product Info */}
            <div className="w-full md:w-1/2">
              {/* Product Title & Price */}
              <h1 className="text-xl md:text-2xl font-medium mb-1">{product.name}</h1>
              <p className="text-sm text-gray-500 mb-1">SKU: {product.sku}</p>
              <p className="text-lg md:text-xl font-medium mb-6">{product.price}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">COLOR <span className="text-xs">({
                  selectedColor === "#191919" ? "BLACK" :
                  selectedColor === "#743a2d" ? "BROWN" :
                  selectedColor === "#67686d" ? "GRAY" : ""
                })</span></p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index}
                      className={`w-8 h-8 rounded-full cursor-pointer border ${
                        selectedColor === color 
                          ? 'border-black ring-2 ring-offset-2 ring-gray-300' 
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">SIZE</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Info */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-1">MATERIAL INFORMATION</p>
                <p className="text-sm">{product.materialInfo}</p>
                <p className="text-xs text-blue-600 mt-1 cursor-pointer">View care instructions</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <select 
                  className="border border-gray-300 h-12 px-3 mr-4 w-32"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                
                <div className="text-sm">
                  <p className="font-medium">BUY NOW</p>
                  <p>{product.price}</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors font-medium"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className="w-full border border-gray-300 py-3 hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? 'fill-black' : ''}`}
                  />
                  ADD TO WISH LIST
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Description Section */}
          <div className="mt-10 md:mt-16">
            <h2 className="text-lg font-bold mb-4">PRODUCT DESCRIPTION</h2>
            <Separator className="mb-6" />
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="w-full md:w-1/2">
                <p className="text-sm leading-relaxed mb-8">
                  {product.description}
                </p>
                
                {/* Care Instructions */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold mb-4">CARE INSTRUCTIONS</h3>
                  <ul className="text-sm space-y-2">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="inline-block h-6 w-6 border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Separator className="my-6" />
                
                {/* Size & Fit */}
                <div>
                  <h3 className="text-sm font-bold mb-4">SIZE AND FIT</h3>
                  <p className="text-sm">Regular fit. True to size.</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                {/* Additional Product Image */}
                <div className="bg-[#f9f9f9] w-full max-w-xs aspect-[3/4] flex items-center justify-center">
                  <img 
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className="h-5/6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommendations Section */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-lg font-bold mb-8 text-center">MIKE AND WIDE RECOMMENDS</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {recommendations.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="bg-[#f9f9f9] aspect-square w-full mb-3 flex items-center justify-center">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="h-4/5 object-contain"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-medium text-center mb-1">{item.name}</h3>
                  <p className="text-xs md:text-sm">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
