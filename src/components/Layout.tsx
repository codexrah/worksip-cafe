import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, MapPin, Calculator as Calendar, Users, Info, Mail, Menu, X, Instagram, Facebook as LucideFacebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
       <svg viewBox="0 0 100 100" className="w-full h-full text-forest fill-none stroke-current stroke-[6]" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 40 L35 75 L50 40 L65 75 L80 40" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M15 40 L85 40" strokeLinecap="round" />
         <circle cx="70" cy="30" r="10" strokeWidth="4" />
         <path d="M65 20 Q70 15 75 20" strokeWidth="4" />
       </svg>
    </div>
    <span className="font-serif text-2xl font-bold tracking-tight text-forest">WorkSip.</span>
  </div>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Spaces', path: '/spaces' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Menu', path: '/menu' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-cream font-sans text-forest relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="bg-orb w-[450px] h-[450px] bg-sage -top-[150px] -right-[100px]"></div>
      <div className="bg-orb w-[350px] h-[350px] bg-warm-yellow bottom-[5%] left-[50%] -translate-x-1/2"></div>
      <div className="bg-orb w-[300px] h-[300px] bg-terracotta top-[25%] right-[10%] opacity-20"></div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-forest/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all hover:opacity-100 ${
                  location.pathname === link.path ? 'opacity-100 font-bold' : 'opacity-60'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/bookings"
              className="px-8 py-3 bg-terracotta text-white rounded-full text-sm font-bold hover:shadow-lg transition-all shadow-terracotta/20"
            >
              Book a Seat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b border-forest/10 overflow-hidden text-center"
            >
              <div className="px-4 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium opacity-70 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                   <Link
                    to="/bookings"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-4 bg-terracotta text-white rounded-full text-lg font-bold"
                  >
                    Book a Seat
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="glass border-t border-forest/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <Logo />
              <p className="opacity-70 leading-relaxed max-w-xs">
                Work better in a calm, coffee-scented space. Designed for thinkers, creators, and focused sessions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/50 rounded-full text-forest hover:bg-white transition-all shadow-sm"><Instagram size={20} /></a>
                <a href="#" className="p-3 bg-white/50 rounded-full text-forest hover:bg-white transition-all shadow-sm"><LucideFacebook size={20} /></a>
                <a href="#" className="p-3 bg-white/50 rounded-full text-forest hover:bg-white transition-all shadow-sm"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-8 italic">Quick Links</h4>
              <ul className="space-y-4 opacity-70">
                <li><Link to="/spaces" className="hover:opacity-100 transition-all">Our Spaces</Link></li>
                <li><Link to="/memberships" className="hover:opacity-100 transition-all">Memberships</Link></li>
                <li><Link to="/menu" className="hover:opacity-100 transition-all">Café Menu</Link></li>
                <li><Link to="/about" className="hover:opacity-100 transition-all">Our Story</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-8 italic">Support</h4>
              <ul className="space-y-4 opacity-70">
                <li><Link to="/contact" className="hover:opacity-100 transition-all">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:opacity-100 transition-all">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-8 italic">Newsletter</h4>
              <p className="opacity-70 mb-6 text-sm">Join our community for quiet hours updates and curated offers.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-white/50 border border-forest/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                />
                <button className="w-full py-4 bg-terracotta text-white rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-terracotta/20">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-10 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-xs tracking-widest font-bold uppercase">
            <p>© 2026 WorkSip — Coworking Café.</p>
            <div className="flex gap-10">
              <span>9 AM – 9 PM daily</span>
              <span className="hidden sm:inline">•</span>
              <span>NCR, Sector-100, Noida, 201301</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Features Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-forest text-white h-16 z-40 hidden lg:flex items-center justify-center gap-16 pointer-events-none">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
          <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full"></div>
          Fiber Speed Wi-Fi
        </div>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
          <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full"></div>
          Power at Every Seat
        </div>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
          <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full"></div>
          Quiet Zones Only
        </div>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
          <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full"></div>
          Artisanal Coffee
        </div>
      </div>
    </div>
  );
}
