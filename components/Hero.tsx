"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/nyc-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter">
          Stephy.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
          New York
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 group">
            Shop Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}