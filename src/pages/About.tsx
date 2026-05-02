import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="px-6 md:px-12 py-16 lg:py-24 bg-[#FAFAFA] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 md:p-16"
      >
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-center">About Ifti Studio</h1>
        
        <div className="space-y-8 text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <p>
            Welcome to <strong className="font-bold text-[#111111]">IFTI STUDIO</strong>, where minimal aesthetic meets modern fashion. 
            Born out of a desire to provide high-quality, trendy streetwear for the fashion-conscious youth of Bangladesh, 
            we focus on clean lines, premium fabrics, and unapologetic style.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Inside the studio" 
            className="w-full h-[400px] object-cover my-12 bg-[#EAEAEA] grayscale mix-blend-multiply opacity-90 border border-gray-200"
          />

          <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-4 mt-12 border-l-2 border-[#111111] pl-3">Our Philosophy</h2>
          <p>
            We believe that less is more. Our collections embrace a minimal color palette—blacks, whites, and soft neutral tones—allowing the cut and fabric to speak for themselves. Every piece is designed keeping the Bangladeshi climate in mind, ensuring breathability and comfort without compromising on that coveted oversized, modern drape.
          </p>
          
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-4 mt-12 border-l-2 border-[#111111] pl-3">Craftsmanship & Quality</h2>
          <p>
            Fast fashion often means poor quality, but not at Ifti Studio. From our premium combed cotton drop-shoulder tees to our timeless straight-leg denims, we prioritize durability and comfort. We want our clothes to become the foundational pieces of your wardrobe.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
