import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import ScrollingLogos from "@/components/ScrollingLogos";
import Footer from "@/components/Footer";

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* Big PRESS title */}
        <section className="pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter">
  PRESS
</h1>
            <div className="w-24 h-1 bg-black mx-auto mt-4" />
          </div>
        </section>

        {/* Hero Image with Scrolling Logos */}
        <section className="py-12">
          <div className="flex flex-col items-center justify-center px-4">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/L'Officiel Stephy.jpeg"
                alt="Stephy"
                fill
                className="object-cover"
              />
            </div>
            <ScrollingLogos />
          </div>
        </section>

        {/* Magazine Features */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tighter">Magazine Features</h2>
            <p className="text-center text-gray-500 mb-12">Featured in publications around the world</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-1.jpg" alt="Magazine Feature 1" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-2.jpg" alt="Magazine Feature 2" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-3.jpg" alt="Magazine Feature 3" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-4.jpg" alt="Magazine Feature 4" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-5.jpg" alt="Magazine Feature 5" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image src="/images/magazine/magazine-6.jpg" alt="Magazine Feature 6" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Mentions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tighter">Press Mentions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2026</div>
                <h3 className="text-lg font-semibold">L'Officiel Monaco</h3>
                <p className="text-gray-600">"The celebrity version of you begins in the wardrobe"</p>
                <a href="https://www.instagram.com/p/DXZmRBojaqb/" className="text-sm text-black hover:underline inline-block mt-2">Read Article →</a>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2025</div>
                <h3 className="text-lg font-semibold">Sundance Institute</h3>
                <p className="text-gray-600">Second Rounder - Half the Sky</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2024</div>
                <h3 className="text-lg font-semibold">Austin Film Festival</h3>
                <p className="text-gray-600">Quarterfinalist - Half the Sky</p>
              </div>
            </div>
          </div>
        </section>

        {/* Representation */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tighter">Representation</h2>
            <p className="text-xl font-semibold">Ken Park Talent Management</p>
            <p className="text-gray-600">(212) 566-8672</p>
            <p className="text-gray-600">kenparktalent@gmail.com</p>
            <div className="mt-8">
              <Link href="/contact">
                <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                  Press Inquiries
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}