import React, { useState } from "react";
import { Menu, X, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function HowToReach() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center font-bold text-slate-950">
                B
              </div>
              <span className="text-xl font-bold text-amber-400">Bio-MANTHAN</span>
            </div> */}

            {/* Desktop Menu */}
            {/* <div className="hidden md:flex gap-8">
              <a href="#details" className="hover:text-amber-400 transition">
                Details
              </a>
              <a href="#travel" className="hover:text-amber-400 transition">
                Travel Info
              </a>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </div> */}

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}

          {/* Mobile Menu */}
          {/* {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#details" className="hover:text-amber-400 transition">
                Details
              </a>
              <a href="#travel" className="hover:text-amber-400 transition">
                Travel Info
              </a>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav> */}

      {/* Hero Section */}
      {/* <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Bio-MANTHAN
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200 mb-2">
              मंथन - Churning of Ideas
            </p>
            <p className="text-gray-300 text-lg">
              IIT Ropar&apos;s Premier Biological Science Event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6 backdrop-blur hover:border-amber-500 transition">
              <div className="text-3xl mb-2">📅</div>
              <h3 className="text-amber-400 font-semibold mb-2">Event Dates</h3>
              <p className="text-gray-300">Coming Soon</p>
            </div>

            <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6 backdrop-blur hover:border-amber-500 transition">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-amber-400 font-semibold mb-2">Location</h3>
              <p className="text-gray-300">IIT Ropar, Punjab</p>
            </div>

            <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6 backdrop-blur hover:border-amber-500 transition">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-amber-400 font-semibold mb-2">Focus</h3>
              <p className="text-gray-300">Biotechnology &amp; Innovation</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Details Section */}
      {/* <section
        id="details"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-amber-400">
            About Bio-MANTHAN
          </h2>

          <div className="space-y-6 text-gray-200">
            <p className="text-lg leading-relaxed">
              Bio-MANTHAN represents a transformative gathering of minds in the
              biological sciences. This event, literally meaning &quot;churning&quot; in
              Sanskrit, embodies the vigorous exchange of ideas and knowledge
              that drives scientific progress.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-800/40 border border-amber-500/20 rounded-lg p-6">
                <h3 className="text-amber-400 font-semibold text-lg mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>Expert Lectures &amp; Seminars</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>Research Presentations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>Networking Opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>Industry Interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-amber-500/20 rounded-lg p-6">
                <h3 className="text-amber-400 font-semibold text-lg mb-4">
                  For Participants
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">★</span>
                    <span>Accommodation Provided</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">★</span>
                    <span>Complimentary Meals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">★</span>
                    <span>Certificate of Participation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">★</span>
                    <span>Networking Events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Travel Information */}
      <section id="travel" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  mb-8 font-serif text-red-500">
            How to Reach IIT Ropar
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Air Travel */}
            <div className="bg-gray-200 border border-gray-400 rounded-xl p-8  transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold text-black">By Air</h3>
              </div>

              <div className="space-y-4 text-black">
                <div>
                  <p className="text-black font-semibold mb-1">
                    Nearest Airport
                  </p>
                  <p>
                    Indira Gandhi International Airport (Delhi) - 250 km
                  </p>
                  <p className="text-sm mt-1">
                    Approximate distance from IIT Ropar
                  </p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    Travel Time
                  </p>
                  <p>4-5 hours by taxi/cab from Delhi</p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    Alternative
                  </p>
                  <p>Chandigarh Airport (80 km)</p>
                  <p className="text-sm mt-1">1.5 hours drive to campus</p>
                </div>
              </div>
            </div>

            {/* Train Travel */}
            <div className=" rounded-xl p-8 border border-gray-400 bg-gray-200 transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚂</span>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  By Train
                </h3>
              </div>

              <div className="space-y-4 text-black">
                <div>
                  <p className="text-black font-semibold mb-1">
                    Nearest Railway Stations
                  </p>
                  <p>Chandigarh Railway Station - 80 km</p>
                  <p>Ambala Cantonment - 60 km</p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    Travel Time
                  </p>
                  <p>2-3 hours from Chandigarh</p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    From Delhi
                  </p>
                  <p>7-8 hours by train to Chandigarh</p>
                </div>
              </div>
            </div>

            {/* Bus Travel */}
            <div className="bg-gray-200 border border-gray-400 rounded-xl p-8  transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="text-xl font-semibold text-black">By Bus</h3>
              </div>

              <div className="space-y-4 text-black">
                <div>
                  <p className="text-black font-semibold mb-1">
                    From Delhi
                  </p>
                  <p>Regular bus services to Chandigarh</p>
                  <p className="text-sm mt-1">5-6 hours journey</p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    From Chandigarh
                  </p>
                  <p>Local transport to Rupnagar</p>
                  <p className="text-sm mt-1">1.5 hours to IIT Ropar</p>
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">
                    Bus Services
                  </p>
                  <p>AC and Non-AC buses available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Location */}
          <div className="bg-gray-200 border border-gray-400 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-red-500 mb-4 flex items-center gap-2">
              <MapPin size={24} />
              Campus Location
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-black mb-4 leading-relaxed">
                  <strong className="text-black">
                    Indian Institute of Technology Ropar
                  </strong>{" "}
                  is located in Rupnagar (formerly Ropar), Punjab. The campus is
                  situated on the banks of the Sutlej River, approximately 100
                  km from Chandigarh and 280 km from Delhi.
                </p>

                <div className=" rounded-lg p-4 mt-4">
                  <p className="text-sm text-black">
                    <strong>Address:</strong> IIT Ropar, Rupnagar, Punjab -
                    140001, India
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 rounded-lg p-6 border border-slate-700">
                <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <iframe
                    title="IIT Ropar Location"
                    src="https://www.google.com/maps?q=Indian+Institute+Of+Technology+Ropar,+Ropar,India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-amber-400">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 border border-amber-500/30 rounded-lg p-8 hover:border-amber-500 transition">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-amber-400" size={24} />
                <h3 className="text-lg font-semibold text-amber-400">Email</h3>
              </div>
              <a
                href="mailto:biomanthan@iitrpr.ac.in"
                className="text-gray-300 hover:text-amber-300 transition break-all"
              >
                biomanthan@iitrpr.ac.in
              </a>
            </div>

            <div className="bg-slate-800/60 border border-amber-500/30 rounded-lg p-8 hover:border-amber-500 transition">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-emerald-400" size={24} />
                <h3 className="text-lg font-semibold text-emerald-400">
                  Phone
                </h3>
              </div>
              <p className="text-gray-300">
                Event Coordinator:
                <br />
                <span className="text-emerald-300">+91 XXXXX XXXXX</span>
              </p>
            </div>

            <div className="bg-slate-800/60 border border-amber-500/30 rounded-lg p-8 hover:border-amber-500 transition">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="text-blue-400" size={24} />
                <h3 className="text-lg font-semibold text-blue-400">Follow</h3>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="border-t border-amber-600/20 bg-slate-950/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-amber-400 font-semibold mb-4">About</h4>
              <p className="text-gray-400 text-sm">
                Bio-MANTHAN is IIT Ropar&apos;s premier biological science event.
              </p>
            </div>

            <div>
              <h4 className="text-amber-400 font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a
                    href="#details"
                    className="hover:text-amber-300 transition"
                  >
                    Details
                  </a>
                </li>
                <li>
                  <a
                    href="#travel"
                    className="hover:text-amber-300 transition"
                  >
                    Travel
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-amber-300 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-400 font-semibold mb-4">
                Information
              </h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-amber-300 transition">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-300 transition">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-300 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-amber-400 font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                IIT Ropar
                <br />
                Rupnagar, Punjab
              </p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Bio-MANTHAN. All rights reserved.</p>
            <p className="mt-2">Indian Institute of Technology Ropar</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
