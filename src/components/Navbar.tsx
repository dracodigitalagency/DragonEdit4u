import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, MessageSquare, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About me', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="font-display font-black text-2xl tracking-wider text-white group-hover:text-brand-purple transition-colors">
              DRAGON
            </span>
            <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-mono text-gray-400 border border-white/10 px-2 py-0.5 rounded-full bg-white/[0.02]">
              Editor & Colorist
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:glow-text-cyan transition-all duration-200 uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Active Status Badge & Primary Call To Action */}
          <div className="hidden min-[900px]:flex items-center space-x-4">
            <div className="flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-xs text-brand-cyan font-mono whitespace-nowrap">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
              <span className="text-gray-300 mr-1 font-sans">Status &bull;</span>
              Active Commissions Open
            </div>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple hover:to-brand-purple text-white text-xs uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 transform active:scale-95"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-[10px] rounded bg-gradient-to-r from-brand-purple to-brand-blue text-white uppercase tracking-wider font-semibold"
            >
              Consult
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-10 md:hidden"
          >
            {/* Background elements decoration */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col space-y-6 text-left">
              <span className="font-mono text-xs tracking-widest text-brand-purple uppercase">
                / Navigation Menu
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-bold text-3xl tracking-tight text-gray-200 hover:text-white hover:pl-4 transition-all duration-300 border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex flex-col space-y-4">
                <div className="flex items-center text-xs text-gray-400 font-mono">
                  <span className="w-2 h-2 rounded bg-emerald-400 mr-2" />
                  Available for global remote projects
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 text-center rounded-lg bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold uppercase tracking-wider shadow-lg"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
