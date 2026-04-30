import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section - Large STEPHY text with centered squircle image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          
          {/* Huge background "STEPHY" text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[25vw] md:text-[20vw] lg:text-[15vw] font-black text-gray-100 tracking-tighter select-none whitespace-nowrap">
              STEPHY
            </h1>
          </div>
          
          {/* Centered Squircle Portrait */}
          <div className="relative z-10 flex justify-center items-center px-4">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/L'Officiel Stephy.jpeg"
                alt="Stephy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Magazine Features Grid - 3x2 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tighter">Magazine Features</h2>
            <p className="text-center text-gray-500 mb-12">Featured in publications around the world</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Magazine Image 1 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-1.jpg"
                    alt="Magazine Feature 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Magazine Image 2 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-2.jpg"
                    alt="Magazine Feature 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Magazine Image 3 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-3.jpg"
                    alt="Magazine Feature 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Magazine Image 4 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-4.jpg"
                    alt="Magazine Feature 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Magazine Image 5 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-5.jpg"
                    alt="Magazine Feature 5"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Magazine Image 6 */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/magazine/magazine-6.jpg"
                    alt="Magazine Feature 6"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Mentions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tighter">Press Mentions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2026</div>
                <h3 className="text-lg font-semibold">L'Officiel Monaco</h3>
                <p className="text-gray-600">"The celebrity version of you begins in the wardrobe"</p>
                <a href="https://www.instagram.com/p/DXZmRBojaqb/?igsh=MzB5MGp1dXE3M2lt" className="text-sm text-black hover:underline inline-block mt-2">Read Article →</a>
              </div>

                            <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2025</div>
                <h3 className="text-lg font-semibold">Sundance Institute</h3>
                <p className="text-gray-600">Second Rounder - Half the Sky</p>
                <a href="#" className="text-sm text-black hover:underline inline-block mt-2">Learn More →</a>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm text-gray-400 mb-1">2024</div>
                <h3 className="text-lg font-semibold">Austin Film Festival</h3>
                <p className="text-gray-600">Quarterfinalist - Half the Sky</p>
                <a href="#" className="text-sm text-black hover:underline inline-block mt-2">View Recognition →</a>
              </div>
            
            </div>
          </div>
        </section>

        {/* Representation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tighter">Representation</h2>
            <div className="space-y-2">
              <p className="text-xl font-semibold">Ken Park Talent Management</p>
              <p className="text-gray-600">(212) 566-8672</p>
              <p className="text-gray-600">kenparktalent@gmail.com</p>
            </div>
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
    </>
  );
}