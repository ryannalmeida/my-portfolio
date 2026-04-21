import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, FileText, ArrowRight, Sparkles } from 'lucide-react';

const resumePath = import.meta.env.BASE_URL + 'resume.pdf';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.from('.hero-badge', { opacity: 0, scale: 0.8, y: 20, duration: 1.2, delay: 0.5 })
        .from('.hero-heading', { opacity: 0, y: 60, duration: 1.5 }, '-=1')
        .from('.hero-description', { opacity: 0, y: 30, duration: 1.2 }, '-=1')
        .from('.hero-actions', { opacity: 0, scale: 0.9, y: 20, duration: 1 }, '-=0.8');

      // Subtle mouse move effect on Hero
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to('.hero-visual-bg', {
          x: xPos,
          y: yPos,
          duration: 2,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Visual Ambient Background */}
      <div className="hero-visual-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full text-center z-10">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-10 backdrop-blur-xl">
          <Sparkles size={14} className="text-indigo-400" />
          <span>Moldando a Excelência Digital</span>
        </div>

        {/* Heading */}
        <div className="hero-heading mb-10">
          <h1 className="font-display font-extrabold tracking-tight leading-none">
            <span className="block text-white text-6xl md:text-8xl lg:text-9xl mb-6">
              Ryann Victor
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl text-white/40 font-bold">
              Engenheiro de <span className="shimmer-text italic">Software</span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="hero-description text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-14 font-light px-4">
          Engenheiro Fullstack especializado na criação de <span className="text-white font-medium">arquiteturas de alto desempenho</span> e
          interfaces que elevam a experiência digital ao próximo nível.
        </p>

        {/* Actions */}
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            ref={buttonRef}
            href="#contact"
            onClick={scrollToContact}
            className="group relative px-10 py-5 bg-white text-black rounded-2xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 uppercase tracking-wider text-sm">Entrar em Contato</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/ryannalmeida", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ryann-almeida/", label: "LinkedIn" },
              { icon: FileText, href: resumePath, label: "Resume" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
                title={social.label}
              >
                <social.icon size={22} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Explore</span>
      </motion.div>
    </section>
  );
}


