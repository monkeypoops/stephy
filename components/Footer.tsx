export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">STEPHY</div>
          
          <div className="flex gap-6">
            <a 
              href="https://instagram.com/_stephaniecheng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              Instagram
            </a>
            <a 
              href="/resume" 
              className="text-gray-600 hover:text-black transition"
            >
              Resume
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-black transition"
            >
              Contact
            </a>
          </div>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Stephy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}