import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const phoneNumber = "5531995439874";
    const message = `Olá! Meu nome é ${data.name}. 
Email: ${data.email}
Mensagem: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Pequeno delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 800));
    
    window.open(whatsappUrl, '_blank');
    
    reset();
    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background element for contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Info (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-3xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Disponível para Projetos</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="font-display text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight"
              >
                Vamos criar o <br />
                <span className="shimmer-text italic">Inimaginável</span>.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-sm"
              >
                Combinando engenharia rigorosa com estética de alto nível. Estou a um clique de distância.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Linkedin, label: 'Networking Profissional', value: 'LinkedIn', color: 'indigo', href: 'https://linkedin.com/in/ryann-almeida' },
                { icon: Github, label: 'Trabalhos Open Source', value: 'GitHub', color: 'cyan', href: 'https://github.com/ryannalmeida' },
                { icon: Mail, label: 'Consultas Diretas', value: 'ryannvictorr@gmail.com', color: 'white', href: 'mailto:ryannvictorr@gmail.com' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="group relative p-6 glass-card rounded-[2rem] border-white/5 hover:border-white/20 transition-all duration-500 flex items-center justify-between overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-0.5">{item.label}</p>
                      <p className="text-white text-lg font-bold tracking-tight">{item.value}</p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 relative z-10">
                    <ArrowUpRight size={18} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="relative group p-[1px] rounded-[3rem] overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(129,140,248,0.3),transparent,rgba(34,211,238,0.3),transparent)] animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="relative glass-card p-12 md:p-16 space-y-10 rounded-[3rem] border-white/5 bg-[#020204]/80 backdrop-blur-3xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Sua Identidade</label>
                    <input
                      {...register('name', { required: 'Nome é obrigatório' })}
                      placeholder="Nome ou Empresa"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all text-white placeholder:text-gray-700 font-medium"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Endereço Digital</label>
                    <input
                      {...register('email', { 
                        required: 'Email é obrigatório',
                        pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                      })}
                      placeholder="email@exemplo.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all text-white placeholder:text-gray-700 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Sua Visão</label>
                  <textarea
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    rows={5}
                    placeholder="Conte-me sobre o desafio..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-6 py-6 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all text-white placeholder:text-gray-700 font-medium resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full relative group h-20 rounded-[2rem] overflow-hidden transition-transform active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 transition-transform group-hover:scale-105 duration-500" />
                  
                  {isSubmitting ? (
                     <div className="relative z-10 flex items-center justify-center">
                       <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                     </div>
                  ) : (
                    <div className="relative z-10 flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.2em] text-xs">
                      <span>Iniciar Protocolo</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest pt-4 opacity-50">
                  Transmissão segura criptografada via WhatsApp
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

