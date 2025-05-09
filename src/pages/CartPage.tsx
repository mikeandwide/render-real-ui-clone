
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

export default function CartPage() {
  // Mock cart data
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "BLACK STRUCTURE WORSTED WOOL BLAZER",
      price: 56,
      size: "M",
      color: "Black",
      quantity: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true"
    }
  ]);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        <MainNav />
        
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h1 className="text-3xl font-bold mb-10">YOUR CART</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl mb-6">Your cart is currently empty</p>
              <Link 
                to="/"
                className="inline-block bg-black text-white py-3 px-6 font-medium"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-[2]">
                <div className="border-b border-gray-200 pb-2 hidden md:grid md:grid-cols-[2fr,1fr,1fr,1fr] font-medium">
                  <div>Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-center">Total</div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 border-b border-gray-200 md:grid md:grid-cols-[2fr,1fr,1fr,1fr] md:gap-4 md:items-center">
                    <div className="flex gap-4 items-center mb-4 md:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-24 object-contain bg-[#f9f9f9]"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600 mt-1">Size: {item.size}</p>
                        <p className="text-sm text-gray-600">Color: {item.color}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-gray-500 underline mt-2 md:hidden"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:text-center">
                      <span className="md:hidden">Price: </span>
                      ${item.price}
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-center mt-2 md:mt-0">
                      <span className="md:hidden">Quantity: </span>
                      <div className="flex border border-gray-300 w-24">
                        <button 
                          className="w-8 h-8 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <div className="flex-1 h-8 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <button 
                          className="w-8 h-8 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-2 md:mt-0 md:justify-center">
                      <span className="md:hidden">Total: </span>
                      ${(item.price * item.quantity).toFixed(2)}
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-gray-500 underline hidden md:block"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1">
                <div className="bg-[#f9f9f9] p-6">
                  <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>
                  
                  <div className="flex justify-between mb-4">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="border-t border-gray-300 my-4"></div>
                  
                  <div className="flex justify-between font-bold mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <Link 
                    to="/checkout"
                    className="block bg-black text-white text-center py-4 w-full font-medium hover:bg-gray-900 transition-colors"
                  >
                    CHECKOUT
                  </Link>
                </div>
                
                <div className="mt-6 p-6 border border-gray-200">
                  <h3 className="font-medium mb-2">PROMO CODE</h3>
                  <div className="flex">
                    <input 
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                    <button className="bg-gray-200 px-4 py-2 font-medium">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
