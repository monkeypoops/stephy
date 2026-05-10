import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* Big RESUME title */}
        <section className="pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter">
  RESUME
</h1>
            <div className="w-24 h-1 bg-black mx-auto mt-4" />
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <Image src="/headshot.jpg" alt="Stephanie Cheng Headshot" width={160} height={160} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">Stephanie Cheng</h2>
                <p className="text-gray-600 text-lg">Actor | Screenwriter | Storyteller</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold border-b border-black pb-2 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">English (Native)</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Mandarin (Fluent)</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Cantonese (Fluent)</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fuzhounese (Fluent)</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Spanish (Speaking)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold border-b border-black pb-2 mb-4">Training</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">HB Studio</span> — Meisner Technique</li>
                  <li><span className="font-medium">Stella Adler Studio</span> — Classical Training</li>
                  <li><span className="font-medium">UCB Improv Program</span> — Improvisation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold border-b border-black pb-2 mb-4">Special Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Stage Combat (Basic)</li>
                  <li>Dialects (British, Southern)</li>
                  <li>Singing (Mezzo-Soprano)</li>
                  <li>Screenwriting</li>
                  <li>Improvisation</li>
                  <li>Voiceover</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold border-b border-black pb-2 mb-4">Writing Awards</h3>
                <p className="font-medium italic">Half the Sky</p>
                <p className="text-sm text-gray-600 mt-1">Feature-length screenplay about the first Chinese American female pilot during WWII</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs bg-black text-white px-2 py-1 rounded">Austin Film Festival Quarterfinalist</span>
                  <span className="text-xs bg-black text-white px-2 py-1 rounded">Sundance Institute Second Rounder</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold border-b border-black pb-2 mb-4">Representation</h3>
              <p><span className="font-medium">Ken Park Talent Management</span></p>
              <p className="text-gray-600">kenparktalent@gmail.com</p>
              <p className="text-gray-600">(212) 566-8672</p>
            </div>

            <div className="text-center mt-8">
              <a href="/resume.pdf" download className="text-sm text-gray-400 hover:text-black transition">
                ↓ Download PDF version (optional)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}