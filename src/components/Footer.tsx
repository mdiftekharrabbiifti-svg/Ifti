export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-2">
        <h4 className="text-[11px] font-bold uppercase tracking-widest">Newsletter</h4>
        <div className="flex border-b border-[#111111] pb-1">
          <input type="email" placeholder="Enter email" className="bg-transparent text-[11px] focus:outline-none w-48" />
          <button className="text-[11px] font-bold uppercase hover:opacity-50 transition-opacity">Join</button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[9px] text-gray-400 uppercase tracking-widest">© {new Date().getFullYear()} Ifti Studio. Built for the modern generation.</p>
      </div>
      <div className="flex gap-6 uppercase text-[10px] font-bold tracking-widest">
        <a href="#" className="hover:underline hover:opacity-50 transition-opacity">Instagram</a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:underline text-green-600 hover:opacity-50 transition-opacity">WhatsApp</a>
      </div>
    </footer>
  );
}
