"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/the-perfect-christmas.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter">
          Stephy.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-handwritten animate-float">
          Welcome to my world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 group">
              About Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
          </Link>
          <Link href="/resume">
            <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition">
              My Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10" />
    </section>
  );
}