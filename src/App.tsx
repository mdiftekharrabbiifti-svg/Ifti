import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111111] font-sans">
        <div className="bg-[#111111] text-white text-[10px] tracking-[0.2em] py-2.5 text-center font-semibold uppercase">
          New Collection Out Now — Free Delivery Inside Dhaka
        </div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
        <a 
          href="https://wa.me/1234567890" 
          className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest z-50 hover:bg-green-700 transition-colors shadow-none"
          target="_blank" 
          rel="noreferrer"
        >
          WhatsApp Chat
        </a>
      </div>
    </BrowserRouter>
  );
}
