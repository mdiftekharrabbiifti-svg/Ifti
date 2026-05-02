import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  // Mock cart items based on products
  const cartItems = [
    { ...products[0], quantity: 1, selectedSize: 'M', selectedColor: 'Midnight Black' },
    { ...products[1], quantity: 2, selectedSize: '32', selectedColor: 'Vintage Blue' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = 60; // 60 Taka for Dhaka
  const total = subtotal + delivery;

  return (
    <div className="px-6 md:px-12 py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-32 border border-gray-200 bg-white">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8">Your cart is currently empty.</p>
            <Link to="/shop" className="px-8 py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">Continue Shopping</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items */}
            <div className="lg:w-2/3 bg-white border border-gray-200 p-8">
              <div className="border-b border-[#111111] pb-4 mb-4 hidden sm:flex">
                <div className="w-1/2 font-bold text-[10px] uppercase tracking-widest text-gray-500">Product</div>
                <div className="w-1/4 font-bold text-[10px] uppercase tracking-widest text-gray-500 text-center">Quantity</div>
                <div className="w-1/4 font-bold text-[10px] uppercase tracking-widest text-gray-500 text-right">Total</div>
              </div>

              {cartItems.map((item, index) => (
                <motion.div 
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col sm:flex-row items-center border-b border-gray-200 py-6 gap-4 sm:gap-0"
                >
                  <div className="w-full sm:w-1/2 flex items-center gap-6">
                    <img src={item.image} alt={item.title} className="w-20 h-28 object-cover bg-[#EAEAEA] grayscale mix-blend-multiply opacity-90 border border-gray-200" />
                    <div>
                      <Link to={`/product/${item.id}`} className="text-[11px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">{item.title}</Link>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{item.selectedColor}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Size / {item.selectedSize}</p>
                      <p className="text-xs font-bold mt-3">৳ {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="w-full sm:w-1/4 flex justify-center items-center gap-4">
                    <div className="flex items-center border border-gray-200 text-sm font-bold">
                      <button className="px-4 py-2 hover:bg-gray-50 transition-colors">-</button>
                      <span className="px-4 py-2 border-x border-gray-200">{item.quantity}</span>
                      <button className="px-4 py-2 hover:bg-gray-50 transition-colors">+</button>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/4 flex justify-between sm:justify-end items-center">
                    <span className="sm:hidden text-[10px] font-bold uppercase tracking-widest">Total: </span>
                    <span className="font-bold text-sm mr-6">৳ {(item.price * item.quantity).toLocaleString()}</span>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white border border-gray-200 p-8">
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-l-2 border-[#111111] pl-3">Order Summary</h2>
                <div className="flex justify-between mb-6 text-xs font-semibold text-gray-600">
                  <span className="uppercase tracking-widest">Subtotal</span>
                  <span>৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-6 text-xs font-semibold text-gray-600">
                  <span className="uppercase tracking-widest">Delivery (Dhaka)</span>
                  <span>৳ {delivery.toLocaleString()}</span>
                </div>
                <div className="border-t border-[#111111] mt-6 pt-6 flex justify-between font-bold text-sm">
                  <span className="uppercase tracking-widest">Total</span>
                  <span>৳ {total.toLocaleString()}</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-4 text-right">VAT included where applicable</p>
                
                <Link to="/checkout" className="block text-center w-full py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors mt-8">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
