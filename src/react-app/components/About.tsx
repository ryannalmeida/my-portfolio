import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Sparkles, Rocket, Coffee } from 'lucide-react';
import profileImage from '@/react-app/assets/profile.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Rocket, label: 'Especialista', value: 'Fullstack' },
    { icon: Coffee, label: 'Anos de Experiência', value: '4+' },
    { icon: Sparkles, label: 'Foco em', value: 'Arquitetura' },
  ];

  return (
    <section id="about" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative group"
          >
            {/* Background Glow for Image */}
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5 bg-[#020204]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-transparent to-transparent z-10 opacity-80" />
              <img
                src={profileImage}
                alt="Ryann Victor"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 right-6 left-6 z-20 glass-card p-10 rounded-[2.5rem] border-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-around">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group/stat">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/stat:bg-indigo-500/20 group-hover/stat:border-indigo-500/40 transition-all duration-500">
                        <stat.icon size={16} className="text-indigo-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-black text-2xl leading-none mb-1">{stat.value}</p>
                        <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-black">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] backdrop-blur-xl bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <User size={14} />
                <span>Minha História</span>
              </div>
              
              <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
                Além do <br />
                <span className="shimmer-text italic">Algoritmo</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-gray-400 text-xl font-light leading-relaxed">
              <p>
                Sou um <span className="text-white font-medium italic">Engenheiro de Software</span> que acredita que a tecnologia 
                deve ser invisível, permitindo que a experiência humana brilhe.
              </p>
              <p>
                Minha trajetória é marcada pela busca incessante pela <span className="text-white font-medium underline decoration-indigo-500 underline-offset-8">excelência técnica</span> e 
                pela estética minimalista. Cada linha de código é uma decisão de design, cada componente uma peça de um quebra-cabeça maior.
              </p>
              <p className="text-lg text-gray-500">
                Especialista em ecossistemas de alto tráfego, foco em criar ferramentas que não apenas funcionam, 
                mas que encantam quem as utiliza.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-6">
              <div className="w-12 h-px bg-white/10" />
              <p className="text-white/20 font-serif italic text-lg max-w-xs leading-tight">
                &quot;The detail is not the detail. It is the design.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


