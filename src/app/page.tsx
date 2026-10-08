'use client';
import { useState } from 'react';
import { Star, ArrowRight, Menu, X, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const FEATURES = [
  { icon: Star, title: 'Premium Quality', desc: 'Every detail crafted to perfection for Restart.' },
  { icon: CheckCircle, title: 'Expert Team', desc: 'Industry veterans with decades of combined experience.' },
  { icon: ArrowRight, title: 'Fast Delivery', desc: 'Your project delivered on time, every time.' },
];

const TESTIMONIALS = [
  { name: 'Sarah Johnson', text: 'Absolutely outstanding! Best experience I have ever had.', stars: 5, avatar: '👩' },
  { name: 'Michael Chen', text: 'Exceeded every expectation. Will recommend to everyone.', stars: 5, avatar: '👨' },
  { name: 'Emma Williams', text: 'Professional, efficient, and genuinely brilliant.', stars: 5, avatar: '👩‍💼' },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#08040d] via-[#100818] to-[#080410] text-white">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        .float { animation: float 4s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-black bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
            Restart
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {'About,Services,Portfolio,Contact'.split(',').map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-violet-400 to-pink-500 text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4 text-sm text-gray-300">
            {'About,Services,Portfolio,Contact'.split(',').map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-white">{}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/20 blur-3xl float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-800/20 blur-3xl float" style={{animationDelay:'2s'}} />
        </div>
        <div className="relative text-center max-w-5xl">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-gray-400 uppercase tracking-widest glow">
            Premium · Trusted · Restart
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent block">
              Welcome to
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent block">
              Restart
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            build me a Bengali cuisine restart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-400 to-pink-500 font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
              Get Started →
            </a>
            <a href="#services" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 font-semibold text-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[['12+','Years'],['500+','Clients'],['4.9★','Rating'],['100%','Satisfaction']].map(([v,l]) => (
              <div key={l} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/50 transition-colors">
                <div className="text-2xl font-black text-white">{v}</div>
                <div className="text-sm text-gray-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Restart</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need, crafted to the highest standard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="group p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-400/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center mb-6">
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">What Our <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Clients Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex mb-4">{Array.from({length:t.stars}).map((_,i) => <span key={i} className="text-amber-400">★</span>)}</div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <span className="font-semibold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Ready to <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Get Started?</span></h2>
          <p className="text-gray-400 mb-10">Drop us your email and we'll be in touch within 24 hours.</p>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400/50"
              />
              <button type="submit" className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-400 to-pink-500 font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Contact Us →
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-3xl bg-white/5 border border-violet-400/30">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-400">We'll reach out to {email} within 24 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-black bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Restart</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Restart. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
