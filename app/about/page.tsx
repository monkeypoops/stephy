import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-center">About Stephy</h1>
          
          {/* Headshot + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/headshot.jpg" alt="Stephanie Cheng" fill className="object-cover" priority />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Stephy (Stephanie Cheng) is an Asian American actor born and raised in New York City. 
                She speaks Mandarin, Cantonese and Fuzhounese.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Her feature-length script <span className="italic">Half the Sky</span> about the first Chinese 
                American female pilot during WWII was a quarterfinalist at Austin Film Festival and 
                second rounder at Sundance Film Institute.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 mt-4">
                <p className="font-semibold">Representation:</p>
                <p>Ken Park Talent Management</p>
                <p className="text-sm text-gray-600">(212) 566-8672</p>
              </div>
            </div>
          </div>

          {/* Brand Story */}
          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-semibold mb-4">The Stephy Brand</h2>
            <p className="text-gray-700 leading-relaxed">
              Stephy is a lifestyle brand born in New York City—for creators, dreamers, and 
              the ones who do it their way. What started as a personal creative outlet has grown 
              into a curated space for art, storytelling, and intentional living.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}