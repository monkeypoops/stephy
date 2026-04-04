"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === "/";
  
  // For About page, check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    if (pathname === "/about") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);
  
  // Determine text color
  let textColor = "text-white";
  let logoColor = "text-white";
  let buttonBg = "bg-white text-black";
  let mobileMenuBg = "bg-black/95";
  let mobileTextColor = "text-white";
  
  // On About page, change to black after scrolling
  if (pathname === "/about" && scrolled) {
    textColor = "text-black";
    logoColor = "text-black";
    buttonBg = "bg-black text-white";
    mobileMenuBg = "bg-white";
    mobileTextColor = "text-black";
  }
  
  // On non-homepage, non-about pages (Resume, Contact), use black
  if (pathname !== "/" && pathname !== "/about") {
    textColor = "text-black";
    logoColor = "text-black";
    buttonBg = "bg-black text-white";
    mobileMenuBg = "bg-white";
    mobileTextColor = "text-black";
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className={`text-xl font-bold tracking-tighter ${logoColor}`}>
              STEPHY
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className={`text-sm ${textColor}/80 hover:${textColor} transition`}>
                About
              </Link>
              <Link href="/resume" className={`text-sm ${textColor}/80 hover:${textColor} transition`}>
                Resume
              </Link>
              <Link href="/contact" className={`px-4 py-2 text-sm rounded-full transition ${buttonBg}`}>
                Contact
              </Link>
            </div>

            {/* Animated Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ backgroundColor: textColor === "text-white" ? "white" : "black" }}
              />
              <span 
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundColor: textColor === "text-white" ? "white" : "black" }}
              />
              <span 
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ backgroundColor: textColor === "text-white" ? "white" : "black" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm ${mobileMenuBg} backdrop-blur-md transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-full gap-8 text-xl ${mobileTextColor}`}>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition text-2xl">
            About
          </Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition text-2xl">
            Resume
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`px-6 py-3 rounded-full transition ${buttonBg} text-lg`}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}