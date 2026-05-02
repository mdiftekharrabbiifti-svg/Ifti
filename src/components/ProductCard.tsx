import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  tags?: string[];
  colors?: string[];
  sizes?: string[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 flex flex-col group h-full">
      <Link to={`/product/${product.id}`} className="flex-grow min-h-[300px] sm:min-h-[350px] bg-[#EAEAEA] relative overflow-hidden block">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-105" 
        />
      </Link>
      <div className="p-4 flex flex-col gap-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[11px] font-bold uppercase tracking-tight truncate text-[#111111] mb-0.5 hover:opacity-70 transition-opacity">{product.title}</h3>
        </Link>
        <p className="text-[10px] text-gray-500 uppercase">{product.colors && product.colors.length > 0 ? product.colors[0] : 'Various'}</p>
        <div className="flex justify-between items-end mt-3">
          <span className="text-xs font-bold">৳ {product.price.toLocaleString()}</span>
          <button className="text-[9px] font-bold uppercase tracking-widest text-[#111111] hover:text-gray-500 transition-colors">Add +</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
