import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');

  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category || p.category === 'unisex');
  }
  if (tag) {
    filteredProducts = filteredProducts.filter(p => p.tags.includes(tag));
  }

  let title = "All Products";
  if (category === 'men') title = "Men's Collection";
  if (category === 'women') title = "Women's Collection";
  if (tag === 'new') title = "New Arrivals";

  return (
    <div className="px-6 md:px-12 py-16 bg-[#FAFAFA] min-h-screen">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 text-center">{title}</h1>
      
      {/* Simple Filters */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap text-[11px] font-bold uppercase tracking-widest">
        <a href="/shop" className={`px-6 py-3 border border-[#111111] transition-colors ${!category && !tag ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] hover:bg-gray-50'}`}>All</a>
        <a href="/shop?category=men" className={`px-6 py-3 border border-[#111111] transition-colors ${category === 'men' ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] hover:bg-gray-50'}`}>Men</a>
        <a href="/shop?category=women" className={`px-6 py-3 border border-[#111111] transition-colors ${category === 'women' ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] hover:bg-gray-50'}`}>Women</a>
        <a href="/shop?tag=new" className={`px-6 py-3 border border-[#111111] transition-colors ${tag === 'new' ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] hover:bg-gray-50'}`}>New Arrivals</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 border border-gray-200 bg-white">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
