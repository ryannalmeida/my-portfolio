import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    title: 'NeuroNotes',
    description:
      'Aplicação de anotações com IA com organização inteligente, busca semântica e marcação automática. Construída para produtividade e gerenciamento de conhecimento perfeito.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'PostgreSQL'],
    githubUrl: 'https://github.com/ryannvictor/neuronotes',
    liveUrl: 'https://neuronotes.app',
  },
  {
    title: 'Sistema de Reserva de Coworking',
    description:
      'Plataforma moderna de gerenciamento de espaços de coworking com reserva de mesas em tempo real, gerenciamento de membros e painel de análises. Operações de espaço de trabalho simplificadas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    techStack: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/ryannalmeida/coworkspace-en',
    liveUrl: 'https://ryannalmeida.github.io/coworkspace-en/',
  },
  {
    title: 'Projeto Futuro',
    description:
      'Em breve. Novo projeto empolgante focado em soluções inovadoras e tecnologia de ponta. Fique atento para atualizações.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    techStack: ['React', 'TypeScript', 'Node.js', 'Docker'],
    githubUrl: 'https://github.com/ryannvictor',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construindo soluções inovadoras com tecnologias modernas e melhores práticas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group/btn"
                  >
                    <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform" />
                    <span className="font-medium">Ver Código</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg transition-all duration-300 group/btn"
                    >
                      <FaExternalLinkAlt className="text-sm group-hover/btn:scale-110 transition-transform" />
                      <span className="font-medium">Demo ao Vivo</span>
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
