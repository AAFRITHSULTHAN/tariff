import Footer from "@/components/footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between px-4 py-12 relative overflow-hidden">
      {/* Animated/blurred background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-md mx-auto flex flex-col items-center mt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 tracking-tight text-white" style={{ letterSpacing: '-0.02em' }}>
          Let's Build Your Growth Engine
        </h1>
        <div className="w-16 h-1 bg-[#e50914] rounded mb-6" />
        <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
          Ready to take your startup to the next level? Fill out the form and our team will get in touch to help you scale.
        </p>
        <form id="contact-form" className="w-full bg-black/80 rounded-none p-8 shadow-lg flex flex-col gap-6 border border-[#222]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-white" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none" />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-white" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-white" htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" required className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none" />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-white" htmlFor="website">Website <span className="text-gray-500 font-normal">(Optional)</span></label>
              <input id="website" name="website" type="url" className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-white" htmlFor="services">Services Needed</label>
            <select id="services" name="services" required className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none">
              <option value="" disabled selected>Select a service</option>
              <option value="Funnel Design & Content Marketing">Funnel Design & Content Marketing</option>
              <option value="Paid Media & Performance Marketing">Paid Media & Performance Marketing</option>
              <option value="Digital Strategy & Consulting">Digital Strategy & Consulting</option>
              <option value="SEO & Local Marketing">SEO & Local Marketing</option>
              <option value="Graphic & Visual Design">Graphic & Visual Design</option>
              <option value="Video Marketing & Production">Video Marketing & Production</option>
              <option value="Business Consultation & Advisory">Business Consultation & Advisory</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-white" htmlFor="challenges">Marketing Challenges/Goals</label>
            <textarea id="challenges" name="challenges" required rows={3} className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none resize-none" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-white" htmlFor="calltime">Preferred Call Time</label>
            <input id="calltime" name="calltime" type="text" required placeholder="e.g. Weekdays 2-4pm IST" className="w-full px-4 py-3 bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#e50914] transition-colors font-medium text-base rounded-none" />
          </div>
          <button type="submit" className="mt-4 px-8 py-3 rounded-none font-bold text-lg bg-[#e50914] text-white shadow-md hover:bg-[#b0060f] transition-all duration-200 tracking-wide uppercase">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full mt-16">
        <Footer />
      </div>
    </div>
  );
} 