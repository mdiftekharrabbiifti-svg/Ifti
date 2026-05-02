import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 md:py-8 border-b border-gray-200 bg-white sticky top-0 z-40">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase transition-opacity hover:opacity-50">Ifti Studio</Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
        <Link to="/shop?category=men" className="hover:opacity-50 transition-opacity">Men</Link>
        <Link to="/shop?category=women" className="hover:opacity-50 transition-opacity">Women</Link>
        <Link to="/shop?tag=new" className="hover:opacity-50 transition-opacity">New Arrivals</Link>
        <Link to="/about" className="hover:opacity-50 transition-opacity">About</Link>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <button className="text-lg cursor-pointer hover:opacity-50 transition-opacity">🔍</button>
        <Link to="/cart" className="flex items-center gap-2 cursor-pointer hover:opacity-50 transition-opacity">
          <span className="text-lg">🛒</span>
          <span className="text-[11px] font-bold">(0)</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-6 gap-6 md:hidden border-b border-gray-200 text-[11px] font-bold uppercase tracking-widest">
          <Link to="/shop?category=men" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">Men</Link>
          <Link to="/shop?category=women" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">Women</Link>
          <Link to="/shop?tag=new" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">New Arrivals</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">About Us</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">Cart (0)</Link>
        </div>
      )}
    </nav>
  );
}
