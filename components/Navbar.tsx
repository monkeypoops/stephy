"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tighter">
              STEPHY
            </Link>

            {/* Desktop Menu */}
         <div className="hidden md:flex items-center gap-8">
  <Link href="/shop" className="text-sm hover:text-gray-500 transition">
    Shop
  </Link>
  <Link href="/art" className="text-sm hover:text-gray-500 transition">
    Art
  </Link>
  <Link href="/about" className="text-sm hover:text-gray-500 transition">
    About
  </Link>
  <button className="ml-4 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
    Login
  </button>
</div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
  <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
    Shop
  </Link>
  <Link href="/art" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
    Art
  </Link>
  <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">
    About
  </Link>
  <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
    Login
  </button>
</div>
      </div>
    </>
  );
}