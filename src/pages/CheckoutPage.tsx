
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-[55px]">
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="mb-8 flex items-center">
            <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/cart" className="text-gray-500 hover:text-black">Cart</Link>
            <span className="mx-2">/</span>
            <span>Checkout</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-10">CHECKOUT</h1>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-[3]">
              <form>
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-6">CONTACT INFORMATION</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-6">SHIPPING ADDRESS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block mb-1 text-sm font-medium">Address</label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block mb-1 text-sm font-medium">City</label>
                      <input
                        type="text"
                        id="city"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block mb-1 text-sm font-medium">Zip Code</label>
                      <input
                        type="text"
                        id="zip"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block mb-1 text-sm font-medium">Country</label>
                      <select
                        id="country"
                        className="w-full border border-gray-300 px-3 py-2"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IN">India</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-6">PAYMENT METHOD</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-gray-300 p-4 rounded">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="credit-card"
                          name="payment-method"
                          defaultChecked
                        />
                        <label htmlFor="credit-card" className="ml-2 font-medium">Credit Card</label>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="card-number" className="block mb-1 text-sm font-medium">Card Number</label>
                          <input
                            type="text"
                            id="card-number"
                            className="w-full border border-gray-300 px-3 py-2"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className="block mb-1 text-sm font-medium">Expiry Date</label>
                            <input
                              type="text"
                              id="expiry"
                              placeholder="MM/YY"
                              className="w-full border border-gray-300 px-3 py-2"
                            />
                          </div>
                          <div>
                            <label htmlFor="cvv" className="block mb-1 text-sm font-medium">CVV</label>
                            <input
                              type="text"
                              id="cvv"
                              className="w-full border border-gray-300 px-3 py-2"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="name-on-card" className="block mb-1 text-sm font-medium">Name on Card</label>
                          <input
                            type="text"
                            id="name-on-card"
                            className="w-full border border-gray-300 px-3 py-2"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-300 p-4 rounded">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="payment-method"
                        />
                        <label htmlFor="paypal" className="ml-2 font-medium">PayPal</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="flex-[2]">
              <div className="bg-[#f9f9f9] p-6">
                <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>
                
                <div className="border-b border-gray-300 pb-4">
                  <div className="flex gap-4 mb-4">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6edeb25a051fc1ef9e8bc51e7002433f16cd42b3?placeholderIfAbsent=true" 
                      alt="BLACK STRUCTURE WORSTED WOOL BLAZER"
                      className="w-16 h-20 object-contain bg-white"
                    />
                    <div>
                      <p className="font-medium">BLACK STRUCTURE WORSTED WOOL BLAZER</p>
                      <p className="text-sm text-gray-600">Size: M / Qty: 1</p>
                      <p className="mt-2">$56.00</p>
                    </div>
                  </div>
                </div>
                
                <div className="py-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$56.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tax</span>
                    <span>$5.60</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$61.60</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white text-center py-4 w-full font-medium hover:bg-gray-900 transition-colors"
                >
                  PLACE ORDER
                </button>
              </div>
              
              <div className="mt-6 text-sm">
                <p className="mb-2">By placing your order you agree to our <a href="#" className="underline">Terms & Conditions</a>.</p>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="underline">Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
