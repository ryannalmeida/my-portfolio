import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-2xl ${
        isScrolled ? 'glass-card bg-[#020204]/40 border-white/10 backdrop-blur-2xl shadow-2xl scale-[1.02]' : 'bg-transparent border-transparent'
      }`}>
        {/* Logo */}
        <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-white">
            Ryann<span className="text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA / Socials */}
        <div className="hidden md:flex items-center gap-4">
           <a 
            href="https://github.com/ryannalmeida" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <Github size={18} className="text-gray-400 hover:text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/ryann-almeida" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <Linkedin size={18} className="text-gray-400 hover:text-white" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 glass-card bg-[#020204]/90 backdrop-blur-3xl rounded-3xl z-40 border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold text-white hover:text-indigo-400 transition-colors"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                 <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex-1 py-4 bg-white text-black text-center rounded-xl font-bold">Início</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
