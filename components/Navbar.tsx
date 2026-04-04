"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage (where background is video)
  const isHomePage = pathname === "/";
  
  // Text color: white on homepage, black on other pages
  const textColor = isHomePage ? "text-white" : "text-black";
  const logoColor = isHomePage ? "text-white" : "text-black";
  const buttonBg = isHomePage ? "bg-white text-black" : "bg-black text-white";
  const mobileMenuBg = isHomePage ? "bg-black/95" : "bg-white";
  const mobileTextColor = isHomePage ? "text-white" : "text-black";

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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative w-8 h-8 flex items-center justify-center ${textColor}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 z-40 ${mobileMenuBg} backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-full gap-8 text-xl ${mobileTextColor}`}>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
            About
          </Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
            Resume
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`px-6 py-3 rounded-full transition ${buttonBg}`}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}