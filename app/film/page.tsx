import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function FilmPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Stephy</h1>
            <p className="text-xl text-gray-600">Actor | Writer | Storyteller</p>
          </div>

          {/* Headshot and Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Headshot */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/headshot.jpg"
                  alt="Stephanie Cheng Headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">About Stephy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stephy (Stephanie Cheng) is an Asian American actor born and raised in New York City. 
                  She speaks Mandarin, Cantonese and Fuzhounese.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Her feature-length script <span className="italic">Half the Sky</span> about the first Chinese 
                  American female pilot during WWII was a quarterfinalist at Austin Film Festival and 
                  second rounder at Sundance Film Institute.
                </p>
              </div>

              {/* Agent Info Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Representation</h3>
                <p className="text-gray-800">Ken Park Talent Management</p>
                <p className="text-gray-600 text-sm mt-1">
                  <a href="tel:+12125668672" className="hover:underline">
                    (212) 566-8672
                  </a>
                </p>
                <p className="text-xs text-gray-400 mt-3">For professional inquiries only</p>
              </div>
            </div>
          </div>

          {/* Additional Section - Training & Skills */}
          <div className="border-t border-gray-100 pt-12 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Training</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• HB Studio, New York</li>
                  <li>• Stella Adler Studio of Acting</li>
                  <li>• UCB Improv Program</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Languages</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• English (Native)</li>
                  <li>• Mandarin (Fluent)</li>
                  <li>• Cantonese (Fluent)</li>
                  <li>• Fuzhounese (Fluent)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Special Skills</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Screenwriting</li>
                  <li>• Stage Combat</li>
                  <li>• Dialects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Note */}
          <div className="text-center mt-16 p-6 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 rounded-2xl">
            <p className="text-gray-700">
              For booking inquiries, please contact <span className="font-semibold">Ken Park Talent Management</span> at{" "}
              <a href="tel:+12125668672" className="underline hover:text-black">(212) 566-8672</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}