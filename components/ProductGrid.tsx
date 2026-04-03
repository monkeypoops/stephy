"use client";

const products = [
  {
    id: 1,
    name: "The Silk Scarf",
    price: "$85",
    category: "Accessories",
    gradient: "from-red-400 to-orange-400",
  },
  {
    id: 2,
    name: "Minimalist Hoops",
    price: "$49",
    category: "Jewelry",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 3,
    name: "Lip Oil",
    price: "$28",
    category: "Beauty",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    id: 4,
    name: "Canvas Tote",
    price: "$65",
    category: "Bags",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    id: 5,
    name: "Sculptural Candle",
    price: "$42",
    category: "Home",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    id: 6,
    name: "Leather Journal",
    price: "$38",
    category: "Stationery",
    gradient: "from-purple-400 to-indigo-400",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Latest Drops
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated pieces for the modern creative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition duration-300 hover:-translate-y-2"
            >
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${product.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
              >
                <span className="text-white text-xl font-bold opacity-80">
                  {product.name}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}