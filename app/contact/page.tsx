"use client";

import { useForm } from "@formspree/react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  // Replace "YOUR_FORM_ID" with your actual Formspree ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
            <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
            <a href="/" className="inline-block mt-8 text-black underline">Return Home</a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-center">Contact</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            For booking inquiries, please reach out to my representation directly.
            For all other questions, use the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition disabled:bg-gray-400"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Agent Info Sidebar */}
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