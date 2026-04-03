import Navbar from "@/components/Navbar";
import Link from "next/link";

const products = [
  { id: 1, name: "The Silk Scarf", price: "$85", category: "Accessories", color: "bg-red-500", gradient: "from-red-400 to-orange-400", inStock: true },
  { id: 2, name: "Minimalist Hoops", price: "$49", category: "Jewelry", color: "bg-blue-500", gradient: "from-blue-400 to-cyan-400", inStock: true },
  { id: 3, name: "Lip Oil", price: "$28", category: "Beauty", color: "bg-pink-500", gradient: "from-pink-400 to-rose-400", inStock: true },
  { id: 4, name: "Canvas Tote", price: "$65", category: "Bags", color: "bg-green-500", gradient: "from-green-400 to-emerald-400", inStock: false },
  { id: 5, name: "Sculptural Candle", price: "$42", category: "Home", color: "bg-amber-500", gradient: "from-amber-400 to-orange-400", inStock: true },
  { id: 6, name: "Leather Journal", price: "$38", category: "Stationery", color: "bg-purple-500", gradient: "from-purple-400 to-indigo-400", inStock: true },
  { id: 7, name: "Cashmere Beanie", price: "$58", category: "Accessories", color: "bg-indigo-500", gradient: "from-indigo-400 to-blue-400", inStock: true },
  { id: 8, name: "Ceramic Vase", price: "$72", category: "Home", color: "bg-teal-500", gradient: "from-teal-400 to-emerald-400", inStock: true },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Shop</h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Curated pieces for the modern creative. Each item is thoughtfully designed and carefully crafted.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-12 pb-4 border-b border-gray-200">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm">All</button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black transition">Accessories</button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black transition">Jewelry</button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black transition">Beauty</button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black transition">Bags</button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black transition">Home</button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className={`relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${product.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold opacity-80">{product.name}</span>
                  {!product.inStock && (
                    <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                      Sold Out
                    </div>
                  )}
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
        </div>
      </main>
    </>
  );
}