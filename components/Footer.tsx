export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">STEPHY</div>
          
          {/* Social Media Icons */}
          <div className="flex gap-8">
            <a 
              href="https://instagram.com/_stephaniecheng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="https://www.imdb.com/name/nm10302775/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
              aria-label="IMDb"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </a>
            
            <a 
              href="https://www.backstage.com/u/stephanie-cheng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
              aria-label="Backstage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </a>
            
            <a 
              href="https://actorsaccess.com/stephaniecheng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
              aria-label="Actors Access"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </a>
            
            {/* Text links */}
            <a 
              href="/resume" 
              className="text-gray-600 hover:text-black transition text-sm"
            >
              Resume
            </a>
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