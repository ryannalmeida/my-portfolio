import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050508]/80 backdrop-blur-xl relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Ryann<span className="text-indigo-400">.</span>
          </span>
          <p className="text-sm text-gray-500 font-light text-center md:text-left">
            © {currentYear} Ryann Victor Almeida. <br className="md:hidden" /> Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/ryannalmeida" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/ryann-almeida" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
          <span>Desenvolvido com</span>
          <Heart size={14} className="text-indigo-500 fill-indigo-500/20" />
          <span>em TypeScript</span>
        </div>
      </div>
    </footer>
  );
}

