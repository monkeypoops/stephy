"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-300 via-pink-200 to-purple-300">
      <div className="text-center z-10 px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-6 tracking-tighter">
          Stephy.
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto mb-12">
          For the creators, the dreamers, and the ones who do it their way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 group">
            Shop Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition">
            Explore Art
          </button>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
    </section>
  );
}