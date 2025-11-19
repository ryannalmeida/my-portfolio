import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/react-app/assets/profile.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sou um <span className="text-purple-400 font-semibold">Engenheiro de Software Full-Stack</span> apaixonado pelo o que faço,
                especializado em construir aplicações web modernas e escaláveis com desempenho e experiência de usuário excepcionais.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Minha expertise abrange todo o ciclo de vida de desenvolvimento, desde arquitetar sistemas backend robustos
                com <span className="text-blue-400 font-semibold">microsserviços</span> até criar interfaces frontend bonitas
                e responsivas com <span className="text-cyan-400 font-semibold">React</span> e <span className="text-cyan-400 font-semibold">Next.js</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Estou comprometido em escrever código limpo e manutenível, seguindo as melhores práticas em arquitetura de software.
                Meu foco é entregar soluções de alta qualidade que não apenas atendem aos requisitos técnicos, mas também
                proporcionam valor e desempenho excepcionais.
              </p>
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Gradient Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-blue-600 to-violet-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Card */}
              <div className="relative glass-card overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Ryann Victor"
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20"
                  >
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      Ryann Victor
                    </h3>
                    <p className="text-purple-300 font-medium">
                      Engenheiro de Software Full-Stack
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
