import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink, Code } from 'lucide-react';
import fotoSaya from "./img/fotoSaya.jpeg"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-blue-400">MSL</a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold">
                Hello, I'm <span className="text-blue-400">Muhammad Sidik Latuconsina</span>
              </h1>
              <h2 className="text-2xl text-gray-400">Portofolio</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Network engineer passionate about building robust, scalable, and efficient network infrastructures.
                Specialized in Mikrotik and Cisco technologies to deliver optimal solutions for modern enterprises. 🧑‍💻
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors">
                  View Work
                </a>
              </div>
              <div className="flex gap-6 pt-8">
                <a href="https://www.linkedin.com/in/muhammad-sidik-25aa02275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/MuhammadSdk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:ltcnsnadidi@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-delay">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                <img
                src={fotoSaya}
                alt="Foto Profil"
                className="w-full h-full object-cover"/>
                </div>
                </div>

          </div>
          <div className="mt-20 text-center">
            <p className="text-xl italic text-gray-400">
              "Teknologi apa pun yang cukup maju tidak dapat dibedakan dari sihir." — Arthur C. Clarke
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Fast and Efficient Network Work</h3>
              <p className="text-gray-300 leading-relaxed">
                Menyediakan solusi jaringan yang cepat, stabil, dan efisien untuk kebutuhan perusahaan maupun institusi.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Network System Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Merancang arsitektur jaringan yang aman, scalable, dan sesuai standar industri untuk mendukung operasional secara optimal.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-400 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Network Performance Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Melakukan analisis dan optimasi jaringan untuk memastikan koneksi tetap stabil, responsif, dan berperforma tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-400">Skills</span>
          </h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Mikrotik</h3>
                <span className="text-blue-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full" style={{width: '90%'}}></div>
              </div>
              <p className="text-gray-400 text-sm">
                Kemampuan dalam konfigurasi router, manajemen bandwidth, firewall, routing, dan pembuatan topologi jaringan berbasis Mikrotik.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Cisco</h3>
                <span className="text-blue-400">80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full" style={{width: '80%'}}></div>
              </div>
              <p className="text-gray-400 text-sm">
                Penguasaan perangkat jaringan Cisco termasuk VLAN, routing, switching, security, dan implementasi solusi jaringan untuk skala kecil hingga menengah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-6xl">🌐</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">Pembangunan Jaringan PT. Mataram AMIKOM</h3>
                <p className="text-gray-400">
                  Proyek pembangunan infrastruktur jaringan lengkap untuk PT. Mataram AMIKOM dengan teknologi terkini.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Mikrotik</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cisco</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Network Design</span>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href="https://drive.google.com/drive/folders/1RimKE_JndBrsAfbakPyfkgLmmKVsxQ_B" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-6xl">🏡</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">Website Joglo Dhepis</h3>
                <p className="text-gray-400">
                  Website modern untuk Joglo Dhepis dengan desain menarik dan user-friendly interface.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Web Design</span>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href="#" className="flex-1 px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Code size={18} />
                    Code
                  </a>
                  <a href="https://joglodhepis.vercel.app/" className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-6xl">📢</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">AdsConnect</h3>
                <p className="text-gray-400">
                  Platform koneksi advertising yang menghubungkan advertiser dengan publisher secara efisien.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">API</span>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href="#" className="flex-1 px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Code size={18} />
                    Code
                  </a>
                  <a href="https://www.adsconnect.my.id/" className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-400">Get In Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:ltcnsnadidi@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    ltcnsnadidi@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">082198240897</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Muhammad Sidik Latuconsina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
