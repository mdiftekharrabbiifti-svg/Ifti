import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const bestSellers = products.filter(p => p.tags.includes('best-seller')).slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center px-8 md:px-12 py-16 lg:py-24 bg-white">
          <span className="text-[11px] font-bold tracking-[0.3em] text-gray-400 mb-4 block">EST. {new Date().getFullYear()} / BANGLADESH</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase text-[#111111]">Elevate<br/>Your<br/>Style.</h1>
          <p className="text-sm text-gray-500 mb-10 max-w-sm leading-relaxed">Minimal. Trendy. Unapologetically You. Discover the new season of Ifti Studio essentials.</p>
          <Link to="/shop?tag=new" className="w-max px-10 py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Shop New Arrivals
          </Link>
        </section>

        {/* Best Sellers Section */}
        <section className="lg:col-span-7 p-8 md:p-10 flex flex-col">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase border-l-2 border-[#111111] pl-3 text-[#111111]">Best Sellers</h2>
            <Link to="/shop" className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-gray-500 transition-colors">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="bg-white border-t border-gray-200 py-16 px-6 md:px-12 text-center text-[#111111]">
        <h2 className="text-xl font-black uppercase tracking-tighter mb-3">Join the Community</h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-8">Subscribe for exclusive drops and 10% off your first order.</p>
        <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto font-bold uppercase tracking-widest text-[11px] border border-[#111111]">
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="px-6 py-4 w-full outline-none focus:bg-gray-50 transition-colors bg-transparent placeholder-gray-400"
          />
          <button type="submit" className="px-8 py-4 bg-[#111111] text-white hover:bg-gray-800 transition-colors whitespace-nowrap min-w-32">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
