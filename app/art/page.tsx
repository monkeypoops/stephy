import Navbar from "@/components/Navbar";

const artworks = [
  { id: 1, title: "Morning Light", artist: "Elena Chen", price: "$1,200", gradient: "from-amber-200 to-orange-200" },
  { id: 2, title: "Urban Pulse", artist: "Marcus Rivera", price: "$950", gradient: "from-blue-200 to-indigo-200" },
  { id: 3, title: "Silent Bloom", artist: "Sofia Kim", price: "$1,500", gradient: "from-pink-200 to-rose-200" },
  { id: 4, title: "Concrete Dreams", artist: "James Wong", price: "$800", gradient: "from-gray-200 to-slate-200" },
];

export default function ArtPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Art Space</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curated artworks from emerging artists. Each piece tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artworks.map((art) => (
              <div key={art.id} className="group cursor-pointer">
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${art.gradient} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center`}>
                  <span className="text-4xl opacity-50">🎨</span>
                </div>
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-gray-500">{art.artist}</p>
                <p className="font-medium mt-1">{art.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
            <p className="text-gray-600">Interested in showcasing your work? <a href="/contact" className="text-black underline">Get in touch</a></p>
          </div>
        </div>
      </main>
    </>
  );
}