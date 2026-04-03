"use client";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/grandcentral.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Overlay */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
              Stephy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Actor. Writer. Storyteller.
            </p>
          </div>
        </section>

        {/* Bio Section - More personal, less generic */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            
            {/* Quote / Tagline */}
            <div className="text-center mb-16">
              <p className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed">
                "Born and raised in New York City. Storytelling is in my blood."
              </p>
              <div className="w-16 h-0.5 bg-black mx-auto mt-8" />
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Stephy (Stephanie Cheng) is an Asian American actor born and raised in <span className="font-semibold">New York City</span>. 
                The city that never sleeps shaped her voice, her drive, and her relentless pursuit of stories that matter.
              </p>
              
              <p>
                She speaks <span className="font-semibold">Mandarin, Cantonese, and Fuzhounese</span> — a reflection of her heritage 
                and a bridge to telling authentic Asian American narratives.
              </p>

              <p>
                Her feature-length script <span className="italic font-semibold">Half the Sky</span>, about the first Chinese American 
                female pilot during WWII, was a <span className="font-semibold">quarterfinalist at Austin Film Festival</span> and a 
                <span className="font-semibold"> second rounder at Sundance Film Institute</span>.
              </p>

              <p>
                Whether on screen or on the page, Stephy brings depth, vulnerability, and an unapologetic truth to every character 
                and every story she tells.
              </p>
            </div>

            {/* Agent Card - More prominent */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border-l-4 border-black">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Representation</p>
              <p className="text-xl font-semibold">Ken Park Talent Management</p>
              <p className="text-gray-600 mt-1">
                <a href="tel:+12125668672" className="hover:text-black transition">
                  (212) 566-8672
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-3">For professional inquiries only</p>
            </div>

            {/* Social Link */}
<div className="mt-6 flex justify-center">
  <a 
    href="https://instagram.com/_stephaniecheng" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition"
  >
    <span>📸</span>
    Follow on Instagram
    <span>→</span>
  </a>
</div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Work With Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}