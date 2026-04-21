import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Zap,
} from 'lucide-react';
import gsap from 'gsap';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'NestJS', 'TypeScript', 'Prisma', 'Python', 'Flask'],
  },
  {
    title: 'Bancos de Dados',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Tooling',
    icon: Terminal,
    skills: ['Docker', 'Git', 'CI/CD', 'n8n', 'Kubernetes', 'Jest', 'Mocha'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic/Tilt effect for cards
      const cards = document.querySelectorAll('.skill-card');
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
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

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          gsap.to('.skills-glow', {
            x,
            y,
            duration: 1,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-[#020204]">
      {/* Dynamic Section Glow */}
      <div className="skills-glow absolute w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl"
          >
            <Zap size={14} className="fill-indigo-400/20" />
            <span>Stack de Alta Performance</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Matriz de <span className="shimmer-text italic">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Dominando o ecossistema moderno para construir sistemas <span className="text-white">escaláveis, resilientes e performáticos</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
              className="skill-card group relative glass-card p-10 rounded-[2rem] border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.03] transition-all duration-700 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-indigo-500/20">
                <category.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-8 text-white tracking-tight">
                {category.title}
              </h3>

              <div className="space-y-3 mt-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-300 transition-colors"
                  >
                    <span>{skill}</span>
                    <div className="h-px flex-1 mx-3 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Aesthetic Card Decor */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


