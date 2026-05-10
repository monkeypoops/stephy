export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">STEPHY</div>
          
          {/* Social Media Icons */}
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {/* Instagram - Official gradient logo style */}
            <a 
              href="https://instagram.com/_stephaniecheng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="url(#instagramGradient)" stroke="none">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#F58529" }} />
                    <stop offset="25%" style={{ stopColor: "#DD2A7B" }} />
                    <stop offset="50%" style={{ stopColor: "#8134AF" }} />
                    <stop offset="75%" style={{ stopColor: "#515BD4" }} />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#instagramGradient)" />
                <circle cx="12" cy="12" r="4" fill="white" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
              </svg>
            </a>
            
            {/* IMDb - Official yellow box logo */}
            <a 
              href="https://www.imdb.com/name/nm10302775/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="IMDb"
            >
              <div className="bg-[#F5C518] px-2 py-0.5 rounded">
                <span className="text-black font-bold text-sm tracking-tight">IMDb</span>
              </div>
            </a>
            
            
            {/* Resume Link */}
            <a 
              href="/resume" 
              className="text-gray-600 hover:text-black transition text-sm"
            >
              Resume
            </a>
            
            {/* Contact Link */}
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-black transition text-sm"
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