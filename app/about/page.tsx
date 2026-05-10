import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* Big ABOUT title */}
        <section className="pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter">
  ABOUT
</h1>
            <div className="w-24 h-1 bg-black mx-auto mt-4" />
          </div>
        </section>

        {/* Bio Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                <p className="text-gray-700 leading-relaxed">
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
          </div>
        </section>

        {/* Featured Work - Films Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tighter">Featured Work</h2>
            <p className="text-center text-gray-500 mb-12">Films and projects I've been part of</p>
            
            <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8">
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
        </section>

        {/* Community & Partnerships Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tighter">Community & Partnerships</h2>
            <p className="text-center text-gray-500 mb-12">Organizations I'm proud to support and work with</p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <div className="w-32 h-20 relative overflow-hidden rounded-lg shadow-md bg-gray-50">
                <Image src="/images/partners/chinatown-ymca.jpg" alt="Chinatown YMCA" fill className="object-contain p-2" />
              </div>
              <div className="w-48 h-20 relative overflow-hidden rounded-lg shadow-md bg-gray-50">
                <Image src="/images/partners/cbwchc.jpg" alt="Charles B Wang Community Health Center" fill className="object-contain p-2" />
              </div>
              <div className="w-32 h-20 relative overflow-hidden rounded-lg shadow-md bg-gray-50">
                <Image src="/images/partners/las-torres.jpg" alt="Las Torres Patagonia" fill className="object-contain p-2" />
              </div>
              <div className="w-48 h-20 relative overflow-hidden rounded-lg shadow-md bg-gray-50">
                <Image src="/images/partners/aha.jpg" alt="AHA" fill className="object-contain p-2" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}