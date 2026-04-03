"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-center">Contact</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            For booking inquiries, please reach out to my representation directly.
            For all other questions, use the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Form - 2/3 width */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                    placeholder="What would you like to say?"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition disabled:bg-gray-400"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                
                {status === "success" && (
                  <p className="text-green-600 text-center">✓ Message sent! I'll respond within 48 hours.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">✗ Error sending. Please try again or call my agent directly.</p>
                )}
              </form>
            </div>

            {/* Agent Info Sidebar - 1/3 width */}
            <div className="bg-gray-50 rounded-2xl p-6 h-fit sticky top-24">
              <h3 className="font-semibold text-lg mb-3">Representation</h3>
              <p className="font-medium">Ken Park Talent Management</p>
              <p className="text-gray-600 text-sm mt-1">
                <a href="tel:+12125668672" className="hover:underline">
                  (212) 566-8672
                </a>
              </p>
              <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">For immediate inquiries</p>
                <p className="text-sm text-gray-600">Call my agent directly for:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
                  <li>Booking requests</li>
                  <li>Audition scheduling</li>
                  <li>Professional collaborations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}