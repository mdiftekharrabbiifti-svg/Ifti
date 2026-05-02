import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) {
    return (
      <div className="text-center py-32 px-5">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link to="/shop" className="px-8 py-3 bg-[#111] text-white font-medium hover:bg-[#333]">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-16 lg:py-24 bg-[#FAFAFA] min-h-[calc(100vh-80px)]">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 p-6 md:p-12 bg-white border border-gray-200">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-auto object-cover bg-[#EAEAEA] grayscale mix-blend-multiply opacity-90"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-4">{product.title}</h1>
          <p className="text-xl font-bold mb-6">৳ {product.price.toLocaleString()}</p>
          
          <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-md">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4">Color</h3>
            <div className="flex gap-3">
              {product.colors?.map(c => (
                <button 
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-6 py-3 border text-[11px] font-bold uppercase tracking-widest transition-colors ${selectedColor === c ? 'border-[#111111] bg-[#111111] text-white' : 'border-gray-200 bg-white text-gray-500 hover:border-[#111111] hover:text-[#111111]'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4">Size</h3>
            <div className="flex gap-3">
              {product.sizes?.map(s => (
                <button 
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-14 h-14 flex items-center justify-center border text-[11px] font-bold uppercase transition-colors ${selectedSize === s ? 'border-[#111111] bg-[#111111] text-white' : 'border-gray-200 bg-white text-gray-500 hover:border-[#111111] hover:text-[#111111]'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full py-5 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors mb-8">
            Add to Bag
          </button>
          
          {/* Mock Social OR specific features */}
          <div className="mt-4 pt-8 border-t border-gray-200">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Details</h4>
            <ul className="text-xs text-gray-600 space-y-3 font-semibold uppercase tracking-wide">
              <li>— 100% Premium Material</li>
              <li>— Free Delivery inside Dhaka</li>
              <li>— Secure Cash on Delivery</li>
              <li>— 7-Day Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
