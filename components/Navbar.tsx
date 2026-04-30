"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Pages where navbar should be black
  const darkPages = ["/press", "/resume", "/contact"];
  const isDarkPage = darkPages.includes(pathname);
  
  // Text colors: white on Home and About, black on Press/Resume/Contact
  let textColor = "text-white";
  let linkColor = "text-white/80 hover:text-white";
  let buttonBg = "bg-white text-black hover:bg-gray-100";
  let mobileMenuBg = "bg-black/95";
  let mobileTextColor = "text-white";
  let hamburgerColor = "bg-white";
  
  if (isDarkPage) {
    textColor = "text-black";
    linkColor = "text-gray-700 hover:text-black";
    buttonBg = "bg-black text-white hover:bg-gray-800";
    mobileMenuBg = "bg-white";
    mobileTextColor = "text-black";
    hamburgerColor = "bg-black";
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className={`text-xl font-bold tracking-tighter ${textColor}`}>
              STEPHY
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className={`text-sm transition ${linkColor}`}>
                About
              </Link>
              <Link href="/press" className={`text-sm transition ${linkColor}`}>
                Press
              </Link>
              <Link href="/resume" className={`text-sm transition ${linkColor}`}>
                Resume
              </Link>
              <Link href="/contact" className={`px-4 py-2 text-sm rounded-full transition ${buttonBg}`}>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
            >
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${hamburgerColor}`} />
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${hamburgerColor}`} />
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${hamburgerColor}`} />
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
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
            About
          </Link>
          <Link href="/press" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
            Press
          </Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
            Resume
          </Link>
         <Link href="/contact" className={`px-4 py-2 text-sm rounded-full transition bg-white text-black hover:bg-gray-100`}>
  Contact
</Link>
        </div>
      </div>
    </>
  );
}