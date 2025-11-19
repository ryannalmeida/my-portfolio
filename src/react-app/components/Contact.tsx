import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

interface ContactFormData {
  email: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Aqui você normalmente enviaria os dados para seu backend
    alert('Mensagem enviada! Obrigado por entrar em contato.');
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente ou quer colaborar? Vamos nos conectar e construir algo incrível juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Endereço de Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Endereço de email inválido',
                    },
                  })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', {
                    required: 'Mensagem é obrigatória',
                    minLength: {
                      value: 10,
                      message: 'A mensagem deve ter pelo menos 10 caracteres',
                    },
                  })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <FaPaperPlane />
                <span>Enviar Mensagem</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-white">
                Conecte-se Comigo
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/ryannalmeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaGithub className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-sm text-gray-400">@ryannalmeida</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ryann-almeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-sm text-gray-400">@ryann-almeida</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-3 text-white">
                Vamos Construir Juntos
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Se você tem uma ideia de projeto, precisa de expertise técnica ou apenas quer conversar sobre
                tecnologia, estou sempre aberto a novas oportunidades e colaborações.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
