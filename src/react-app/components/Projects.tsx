import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import gsap from 'gsap';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Artools',
    description:
      'A Precision Pen que redefine o equilíbrio entre peso, fluxo e design. Um projeto focado em criadores que exigem perfeição em cada traço e tecnologia de ponta.',
    image: '/artools.png',
    techStack: ['TypeScript', 'Next.js', 'Canvas API', 'GSAP'],
    githubUrl: 'https://github.com/ryannalmeida/Artools-Website',
    liveUrl: 'https://artools-website-beige.vercel.app/',
  },
  {
    title: 'MySpot',
    description:
      'Tecnologia avançada de tradução em tempo real para jogos via IA. Reconhecimento de tela de alto desempenho que permite entender qualquer idioma instantaneamente.',
    image: '/myspot.png',
    techStack: ['React', 'TypeScript', 'AI/ML', 'OCR Engine'],
    githubUrl: 'https://github.com/ryannalmeida/myspot',
    liveUrl: 'https://myspot.com.br',
  },
  {
    title: 'Lacrei Insights',
    description:
      'Análise estratégica de dados e inteligência para a plataforma Lacrei Saúde. Focado em acessibilidade e impacto social no setor de saúde inclusiva.',
    image: '/lacrei.png',
    techStack: ['React', 'TypeScript', 'Data Analysis', 'Python'],
    githubUrl: 'https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe4-t3-lacrei_insights',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          
          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-sm"
            >
              <Code2 size={18} />
              <span>Portfólio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-black tracking-tighter text-white"
            >
              Projetos em <span className="shimmer-text">Destaque</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-md font-light leading-relaxed"
          >
            Uma seleção de trabalhos que combinam complexidade técnica com design excepcional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group relative flex flex-col h-full glass-card rounded-[2.5rem] border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-700"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/20 to-transparent opacity-80" />
                
                {/* Tech Chips Overlay */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 font-semibold uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Floating Number */}
                <span className="absolute bottom-4 right-8 font-display text-8xl font-black text-white/[0.03] select-none italic pointer-events-none group-hover:text-indigo-500/10 transition-colors duration-700">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow relative z-10">
                <h3 className="font-display text-3xl font-bold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-300 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-10 font-light leading-relaxed flex-grow text-lg">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-all"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-indigo-400 hover:text-white transition-all duration-500 group/btn"
                    >
                      <ExternalLink size={20} className="group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

