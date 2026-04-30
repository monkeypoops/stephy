"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
  const scrollToBio = () => {
    document.getElementById("bio-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCommunity = () => {
    document.getElementById("community-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">About Stephy</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">Actor. Writer. Storyteller.</p>
          </div>
          
          {/* Down Arrow - Scroll to Bio - YELLOW */}
          <button
            onClick={scrollToBio}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown size={40} className="text-yellow-400 hover:text-yellow-300 transition" />
          </button>
        </section>

        {/* Bio Section (Headshot + Representation) */}
        <section id="bio-section" className="py-24 bg-white scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            
            {/* Headshot and Bio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/headshot.jpg" alt="Stephanie Cheng Headshot" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stephy (Stephanie Cheng) is an Asian American actor born and raised in <span className="font-semibold">New York City</span>. 
                  The city that never sleeps shaped her voice, her drive, and her relentless pursuit of stories that matter.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  She speaks <span className="font-semibold">Mandarin, Cantonese, and Fuzhounese</span> — a reflection of her heritage 
                  and a bridge to telling authentic Asian American narratives.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Her feature-length script <span className="italic font-semibold">Half the Sky</span>, about the first Chinese 
                  American female pilot during WWII, was a <span className="font-semibold">quarterfinalist at Austin Film Festival</span> and a 
                  <span className="font-semibold"> second rounder at Sundance Film Institute</span>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether on screen or on the page, Stephy brings depth, vulnerability, and an unapologetic truth to every character 
                  and every story she tells.
                </p>

                <div className="mt-6">
                  <a href="https://instagram.com/_stephaniecheng" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition">
                    <span>📸</span> Follow on Instagram <span>→</span>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mt-6">
                  <p className="font-semibold">Representation:</p>
                  <p>Ken Park Talent Management</p>
                  <p className="text-sm text-gray-600">(212) 566-8672</p>
                </div>
              </div>
            </div>

            {/* Down Arrow - Scroll to Community Section - YELLOW */}
            <div className="flex justify-center mt-4">
              <button
                onClick={scrollToCommunity}
                className="cursor-pointer"
                aria-label="Scroll to community partners"
              >
                <ChevronDown size={32} className="text-yellow-400 hover:text-yellow-300 transition" />
              </button>
            </div>
          </div>
        </section>

        {/* Films & Projects Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="border-t border-gray-100 pt-6 mt-2">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Work</h2>
            <p className="text-center text-gray-600 mb-8">Films and projects I've been part of</p>
            <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 mb-16">
              <div className="w-28 h-40 md:w-32 md:h-48 relative overflow-hidden rounded-lg shadow-md">
                <Image src="/images/films/past-lives.jpg" alt="Past Lives" fill className="object-cover" />
              </div>
              <div className="w-28 h-40 md:w-32 md:h-48 relative overflow-hidden rounded-lg shadow-md">
                <Image src="/images/films/biodivercity.jpg" alt="Biodivercity" fill className="object-cover" />
              </div>
              <div className="w-28 h-40 md:w-32 md:h-48 relative overflow-hidden rounded-lg shadow-md">
                <Image src="/images/films/xenogender.jpg" alt="Xenogender" fill className="object-cover" />
              </div>
              <div className="w-28 h-40 md:w-32 md:h-48 relative overflow-hidden rounded-lg shadow-md">
                <Image src="/images/films/first-contact.jpg" alt="First Contact" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Nonprofits & Community Section */}
        <section id="community-section" className="scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="border-t border-gray-100 pt-12 pb-24">
              <h2 className="text-2xl font-semibold mb-6 text-center">Community & Partnerships</h2>
              <p className="text-center text-gray-600 mb-8">Organizations I'm proud to support and work with</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <div className="w-32 h-20 relative overflow-hidden rounded-lg shadow-md bg-white">
                  <Image src="/images/partners/chinatown-ymca.jpg" alt="Chinatown YMCA" fill className="object-contain p-2" />
                </div>
                <div className="w-48 h-20 relative overflow-hidden rounded-lg shadow-md bg-white">
                  <Image src="/images/partners/cbwchc.jpg" alt="Charles B Wang Community Health Center" fill className="object-contain p-2" />
                </div>
                <div className="w-32 h-20 relative overflow-hidden rounded-lg shadow-md bg-white">
                  <Image src="/images/partners/las-torres.jpg" alt="Las Torres Patagonia" fill className="object-contain p-2" />
                </div>
                <div className="w-48 h-20 relative overflow-hidden rounded-lg shadow-md bg-white">
                  <Image src="/images/partners/aha.jpg" alt="AHA" fill className="object-contain p-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}