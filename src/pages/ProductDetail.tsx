
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [quantity, setQuantity] = React.useState(1);

  // Mock product data
  const product = {
    id,
    name: "BLACK STRUCTURE WORSTED WOOL BLAZER",
    price: "$ 56",
    description: "Our signature blazer, crafted from premium worsted wool. This structured piece offers a modern silhouette with Italian-inspired detailing. Perfect for formal occasions or elevating your everyday style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#191919", "#743a2d", "#67686d"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7624969dbb9ed95c4481636db649a534f625b517?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/96df9866aa9438ef7e8024553e30fe60acce036b?placeholderIfAbsent=true"
    ]
  };

  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}, Size: ${selectedSize}, Quantity: ${quantity}`);
    // Here you would normally update cart state or send to an API
    alert("Product added to cart!");
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-16 px-4 gap-12">
          <div className="flex-1">
            <div className="bg-[#f9f9f9] aspect-[0.8] w-full mb-4 flex items-center justify-center">
              <img 
                src={product.images[0]}
                alt={product.name}
                className="h-4/5 object-contain"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {product.images.map((img, index) => (
                <div key={index} className="bg-[#f9f9f9] w-20 h-20 flex items-center justify-center">
                  <img 
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-4/5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-xl mt-2">{product.price}</p>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">COLOR</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">SIZE</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center border ${
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
            
            <div className="mt-8">
              <h3 className="text-sm font-medium mb-2">QUANTITY</h3>
              <div className="flex border border-gray-300 w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <div className="flex-1 h-10 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="mt-10 bg-black text-white py-4 w-full font-medium hover:bg-gray-900 transition-colors"
            >
              ADD TO CART
            </button>
            
            <p className="mt-8 text-sm leading-relaxed">
              {product.description}
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-medium mb-2">SHIPPING & RETURNS</h3>
              <p className="text-sm">Free shipping on all orders over $100. Easy returns within 30 days.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
