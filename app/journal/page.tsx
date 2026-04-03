import Navbar from "@/components/Navbar";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Art of Slow Living",
    date: "April 1, 2026",
    excerpt: "Finding beauty in the everyday moments and why slowing down might be the ultimate luxury.",
    category: "Lifestyle",
    gradient: "from-green-200 to-emerald-200",
  },
  {
    id: 2,
    title: "Behind the Design: The Silk Scarf",
    date: "March 25, 2026",
    excerpt: "A look into the creative process, from initial sketch to final product.",
    category: "Design",
    gradient: "from-red-200 to-orange-200",
  },
  {
    id: 3,
    title: "NYC Art Week: Our Top Picks",
    date: "March 18, 2026",
    excerpt: "Exploring the best galleries, installations, and emerging artists in the city.",
    category: "Art",
    gradient: "from-purple-200 to-pink-200",
  },
];

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Journal</h1>
            <p className="text-gray-600 text-lg">Stories, thoughts, and inspiration from the Stephy community.</p>
          </div>

          <div className="space-y-12">
            {posts.map((post) => (
              <Link href={`/journal/${post.id}`} key={post.id}>
                <div className="group cursor-pointer border-b border-gray-100 pb-8 hover:border-gray-300 transition">
                  <div className={`h-48 rounded-2xl bg-gradient-to-br ${post.gradient} mb-6 flex items-center justify-center`}>
                    <span className="text-3xl opacity-50">📖</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:underline">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}