import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Header with Headshot */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Headshot */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src="/headshot.jpg"
                alt="Stephanie Cheng Headshot"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">Stephanie Cheng</h1>
              <p className="text-gray-500 text-lg">Actor | Screenwriter | Storyteller</p>
              <div className="w-16 h-0.5 bg-black mt-4 mx-auto md:mx-0" />
            </div>
          </div>

          {/* Contact Info Row - Email only, no phone */}
          <div className="text-center mb-12">
            <p className="text-gray-600">New York, NY</p>
            <p className="text-gray-600">
              <a href="mailto:stephanieactor@gmail.com" className="hover:underline">
                stephanieactor@gmail.com
              </a>
            </p>
          </div>

          {/* Languages */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-black pb-2 mb-4">Languages</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">English (Native)</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Mandarin (Fluent)</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Cantonese (Fluent)</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fuzhounese (Fluent)</span>
            </div>
          </div>

          {/* Training */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-black pb-2 mb-4">Training</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">HB Studio</span>, New York — Meisner Technique</li>
              <li><span className="font-medium">Stella Adler Studio of Acting</span>, New York — Classical Training</li>
              <li><span className="font-medium">UCB Improv Program</span>, New York — Improvisation</li>
            </ul>
          </div>

          {/* Special Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-black pb-2 mb-4">Special Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stage Combat (Basic)</li>
                <li>Dialects (British, Southern)</li>
                <li>Singing (Mezzo-Soprano)</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Screenwriting</li>
                <li>Improvisation</li>
                <li>Voiceover</li>
              </ul>
            </div>
          </div>

          {/* Writing Awards */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-black pb-2 mb-4">Writing Awards</h2>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="font-medium italic mb-2">Half the Sky</p>
              <p className="text-sm text-gray-600 mb-3">Feature-length screenplay about the first Chinese American female pilot during WWII</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-black text-white px-2 py-1 rounded">Austin Film Festival Quarterfinalist</span>
                <span className="text-xs bg-black text-white px-2 py-1 rounded">Sundance Institute Second Rounder</span>
              </div>
            </div>
          </div>

          {/* Representation */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-black pb-2 mb-4">Representation</h2>
            <p><span className="font-medium">Ken Park Talent Management</span></p>
            <p className="text-gray-600">kenparktalent@gmail.com</p>
            <p className="text-gray-600">(212) 566-8672</p>
          </div>

          {/* Download PDF Option (small, not prominent) */}
          <div className="text-center mt-12 pt-6 border-t border-gray-200">
            <a 
              href="/resume.pdf" 
              download
              className="text-sm text-gray-400 hover:text-black transition"
            >
              ↓ Download PDF version (optional)
            </a>
          </div>
        </div>
      </main>
    </>
  );
}