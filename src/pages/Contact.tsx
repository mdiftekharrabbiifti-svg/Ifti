import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="px-6 md:px-12 py-16 bg-[#FAFAFA] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto border border-gray-200 bg-white">
          {/* Form */}
          <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200">
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-l-2 border-[#111111] pl-3">Send a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" placeholder="Your email" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows={5} className="w-full border border-gray-200 p-4 text-sm outline-none focus:border-[#111111] bg-transparent" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2 bg-[#F5F5F5] p-8 md:p-12">
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-l-2 border-[#111111] pl-3">Get in Touch</h2>
            <div className="space-y-8 text-sm text-gray-600 font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#111111]" />
                <div>
                  <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#111111] mb-1">Address</h3>
                  <p className="leading-relaxed">123 Fashion Avenue<br />Dhanmondi, Dhaka 1209<br />Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-[#111111]" />
                <div>
                  <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#111111] mb-1">Email</h3>
                  <p>support@iftistudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-[#111111]" />
                <div>
                  <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#111111] mb-1">Phone & WhatsApp</h3>
                  <p>+880 1234-567890</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#111111] mb-4">Follow Us</h3>
              <div className="flex gap-6 uppercase text-[10px] font-bold tracking-widest">
                <a href="#" className="hover:underline transition-colors hover:text-gray-500">Instagram</a>
                <a href="#" className="hover:underline transition-colors hover:text-gray-500">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
