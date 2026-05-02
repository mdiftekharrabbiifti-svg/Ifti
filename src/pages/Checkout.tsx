import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 border border-gray-200 max-w-md w-full"
        >
          <div className="w-16 h-16 bg-[#F5F5F5] text-[#111111] rounded-full flex items-center justify-center mx-auto mb-8 text-3xl border border-gray-200">
            ✓
          </div>
          <h1 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#111111]">Order Confirmed</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 leading-relaxed">
            Thank you for shopping with Ifti Studio. We have received your order and will contact you shortly to confirm delivery.
          </p>
          <Link to="/shop" className="inline-block px-8 py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full">
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-12 bg-white border border-gray-200 p-8 md:p-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-6 border-l-2 border-[#111111] pl-3">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number (WhatsApp preferred)</label>
                    <input type="tel" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-6 border-l-2 border-[#111111] pl-3">Shipping Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Full Address</label>
                    <input type="text" placeholder="House/Flat No, Street Name, Area" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">City</label>
                    <select className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" required>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Postal Code (Optional)</label>
                    <input type="text" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-6 border-l-2 border-[#111111] pl-3">Payment Method</h2>
                <div className="border border-[#111111] bg-gray-50 p-6 flex items-center gap-4">
                  <input type="radio" id="cod" name="payment" value="cod" defaultChecked className="w-4 h-4 accent-[#111111] cursor-pointer" />
                  <label htmlFor="cod" className="text-[11px] font-bold uppercase tracking-widest cursor-pointer">Cash on Delivery (COD)</label>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-4">Pay in cash when you receive your order.</p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#111111] text-white p-8 sticky top-32">
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-l-2 border-white pl-3">Your Order</h2>
              
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-800">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" className="w-16 h-20 object-cover bg-white grayscale mix-blend-screen opacity-90 border border-gray-800" alt="Tee" />
                  <span className="absolute -top-3 -right-3 bg-white text-[#111111] text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest leading-tight">Drop-Shoulder Tee</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Midnight Black / M</p>
                </div>
                <p className="text-sm font-bold">৳ 850</p>
              </div>

              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-800">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" className="w-16 h-20 object-cover bg-white grayscale mix-blend-screen opacity-90 border border-gray-800" alt="Jeans" />
                  <span className="absolute -top-3 -right-3 bg-white text-[#111111] text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest leading-tight">Straight-Leg Denim</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Vintage Blue / 32</p>
                </div>
                <p className="text-sm font-bold">৳ 2,900</p>
              </div>

              <div className="flex justify-between mb-4 text-xs font-semibold text-gray-400">
                <span className="uppercase tracking-widest">Subtotal</span>
                <span>৳ 3,750</span>
              </div>
              <div className="flex justify-between mb-4 text-xs font-semibold text-gray-400">
                <span className="uppercase tracking-widest">Delivery (Dhaka)</span>
                <span>৳ 60</span>
              </div>
              <div className="border-t border-gray-800 mt-6 pt-6 flex justify-between font-bold text-sm mb-10">
                <span className="uppercase tracking-widest">Total</span>
                <span className="text-white">৳ 3,810</span>
              </div>

              <button type="submit" form="checkout-form" className="block text-center w-full py-4 bg-white text-[#111111] text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
