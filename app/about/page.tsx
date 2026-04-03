import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">About Stephy</h1>
            <div className="w-20 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 italic">
              "For the creators, the dreamers, and the ones who do it their way."
            </p>
          </div>

          {/* Story */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stephy was born from a simple idea: create beautiful, meaningful pieces for people who see the world differently. 
              We believe that what you wear, carry, and surround yourself with should be an extension of who you are.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based in New York City, we draw inspiration from the energy, creativity, and diversity of the city that never sleeps. 
              Each piece is thoughtfully designed to balance form and function, beauty and purpose.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-gray-600">Every piece is made with care and attention to detail.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2">Sustainably Made</h3>
              <p className="text-sm text-gray-600">Ethical production with minimal environmental impact.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Artist Collaborations</h3>
              <p className="text-sm text-gray-600">Working with emerging artists and designers.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 p-8 rounded-2xl text-center my-12">
            <p className="text-lg md:text-xl font-medium text-gray-800">
              "Stephy isn't just a brand — it's a community of people who dare to be different, 
              who find beauty in the unexpected, and who believe that small details make a big difference."
            </p>
          </div>
        </div>
      </main>
    </>
  );
}